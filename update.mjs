import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { parseArgs } from 'node:util'

import { discoveryRequest, processDiscoveryResponse, customFetch } from 'oauth4webapi'
import { createRemoteJWKSet } from 'jose'
import objectHash from 'object-hash'
import { $ } from 'execa'

import lookup from './lookup.mjs'

const {
  positionals: [name],
} = parseArgs({ allowPositionals: true })

const issuer = lookup.find((issuer) => issuer.name === name)

if (!issuer) {
  throw new Error(`"${name}" is not present in the lookup`)
}

const hash = (obj) =>
  objectHash(obj, {
    algorithm: 'sha256',
    respectType: false,
    unorderedArrays: true,
  })

const padSingleDigit = (digit) => digit.toString().padStart(2, '0')

const nl = (string, i = 1) => {
  if (--i) {
    return nl(`${string}\n`, i)
  }
  return `${string}\n`
}

const { author, license, funding, repository } = JSON.parse(await readFile('package.json'))

const pretty = (obj) => JSON.stringify(obj, null, 2)

console.log('====', issuer.name, '====', nl(''))
let commit = false

const response = await discoveryRequest(new URL(issuer.identifier), {
  algorithm: issuer.algorithm,
  [customFetch](...args) {
    args[1].redirect = 'follow'
    return fetch(...args)
  },
})
const metadata = await processDiscoveryResponse(
  new URL(issuer.overwrites?.expectedIssuer ?? issuer.identifier),
  response,
)

let jwks
if (metadata.jwks_uri) {
  const remoteJwks = createRemoteJWKSet(new URL(metadata.jwks_uri))
  await remoteJwks.reload()
  jwks = remoteJwks.jwks()
}

const dir = `issuers/${issuer.name}`
if (!existsSync(dir)) {
  await mkdir(dir, { recursive: true })
  commit = true
}

let mjs = nl(`export const metadata = ${pretty(metadata)}`, 2)

if (jwks) {
  mjs += nl(`export const jwks = ${pretty(jwks)}`)
}

await writeFile(`${dir}/${issuer.name}.mjs`, mjs)

let description = `Exports the JSON response from ${response.url}`
if (jwks) {
  description = description.replace('response', 'responses')
  description += ` and ${metadata.jwks_uri}`
}

const safeIdentifier = issuer.name.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
let readme = `# Summary

${description}

# Usage

\`\`\`js
import * as ${safeIdentifier} from '@wellknowns/${issuer.name}'

console.log('${response.url}', ${safeIdentifier}.metadata)
`

if (jwks) {
  readme += `console.log('${metadata.jwks_uri}', ${safeIdentifier}.jwks)`
}
readme += `
\`\`\``

await writeFile(`${dir}/README.md`, nl(readme))
const newMetadataDigest = nl(hash(metadata))
const newJwksDigest = jwks ? nl(hash(jwks)) : nl('undefined')

if (!commit) {
  const oldMetadataDigest = await readFile(`${dir}/metadata-digest`, {
    encoding: 'utf-8',
  }).catch(() => {})
  const oldJwksDigest = await readFile(`${dir}/jwks-digest`, { encoding: 'utf-8' }).catch(() => {})
  if (oldMetadataDigest !== newMetadataDigest) {
    commit = true
  }
  if (oldJwksDigest !== newJwksDigest) {
    commit = true
  }
}

await writeFile(`${dir}/metadata-digest`, newMetadataDigest)
await writeFile(`${dir}/jwks-digest`, newJwksDigest)

const now = new Date()
await writeFile(
  `${dir}/package.json`,
  nl(
    pretty({
      name: `@wellknowns/${issuer.name}`,
      version: [
        now.getUTCFullYear(),
        padSingleDigit(now.getUTCMonth()),
        padSingleDigit(now.getUTCDate()),
      ].join('.'),
      author,
      license,
      funding,
      homepage: `https://github.com/${repository}/tree/main/${dir}`,
      repository: {
        type: 'git',
        url: `https://github.com/${repository}.git`,
        directory: dir,
      },
      type: 'module',
      description,
      files: [`${issuer.name}.mjs`],
      exports: {
        default: `./${issuer.name}.mjs`,
      },
    }),
  ),
)

if (commit) {
  await $`git add ${dir}`
} else {
  await $`git restore ${dir}`
}

console.log(nl((await $`git status ${dir}`).stdout, 2))
