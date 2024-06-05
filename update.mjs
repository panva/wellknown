import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { discoveryRequest, processDiscoveryResponse } from 'oauth4webapi'
import { createRemoteJWKSet } from 'jose'
import lookup from './lookup.mjs'
import objectHash from 'object-hash'
import { $ } from 'execa'

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

for (const issuer of lookup) {
  console.log('====', issuer.name, '====', nl(''))
  let commit = false
  try {
    const url = new URL(issuer.identifier)

    const response = await discoveryRequest(url, {
      algorithm: issuer.algorithm,
    })
    const metadata = await processDiscoveryResponse(url, response)

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

    let readme = `# Summary

${description}

# Usage

\`\`\`js
import * as ${issuer.name} from '@wellknowns/${issuer.name}'

console.log('${response.url}', ${issuer.name}.metadata)
`

    if (jwks) {
      readme += `console.log('${metadata.jwks_uri}', ${issuer.name}.jwks)`
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
      const oldJwksDigest = await readFile(`${dir}/jwks-digest`, { encoding: 'utf-8' }).catch(
        () => {},
      )
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
    )

    if (commit) {
      await $`git add --force ${dir}`
    } else {
      await $`git restore ${dir}`
    }

    console.log(nl((await $`git status ${dir}`).stdout, 2))
  } catch (err) {
    console.warn(err)
  }
}
