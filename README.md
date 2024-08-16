> [!WARNING]
> This is an experiment for now. Its purpose is to have a module that can be imported during builds for target environments which cannot keep context between invocations (e.g. Cloudflare Workers) where querying discovery and JWKS endpoints during every invocation would be detrimental to its performance. This can then be used instead of dynamic discovery and also as means to inject the JWKS into cache for e.g. https://github.com/panva/oauth4webapi or https://github.com/panva/jose

This repository regularly queries and updates the current state of well-known public API responses from OAuth 2.0 and OIDC providers. These are kept up to date in the repository and published to npm under https://www.npmjs.com/org/wellknown.

The list of providers to query is kept in [`lookup.mjs`](https://github.com/panva/wellknown/blob/main/lookup.mjs).

The update frequency is defined in the GitHub Actions workflow [`update.yml`](https://github.com/panva/wellknown/blob/main/.github/workflows/update.yml).

The versioning scheme follows semver where the major version is currently set to 1, minor version is formed from the current date YYYYMMDD and patch version starts with 0 each day and if multiple updates per day are required, the patch version is incremented. Example: `1.20210902.0` would be the first update on September 2nd, 2021.

The repository and npm package are only updated if the response from the API has changed.

To add or update a provider, please [open an issue](https://github.com/panva/wellknown/issues/new) (not a PR) with the request, because of the automated nature PR notifications are muted on my end.
