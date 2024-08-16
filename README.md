> [!WARNING]
> This is an experiment for now.

This repository regularly queries and updates the current state of well-known public API responses from OAuth 2.0 and OIDC providers. These are kept up to date in the repository and published to npm under https://www.npmjs.com/org/wellknown.

To list of providers to query is defined in [`lookup.mjs`](https://github.com/panva/wellknown/blob/main/lookup.mjs).

The update frequency is defined in the GitHub Actions workflow [update.yml](https://github.com/panva/wellknown/blob/main/.github/workflows/update.yml).

The versioning scheme follows semver where the major version is currently set to 1, minor version is formed from the current date YYYYMMDD and patch version starts with 0 each day and if multiple updates per day are required, the patch version is incremented. Example: `1.20210902.0` would be the first update on September 2nd, 2021.

The repository and npm package are only updated if the response from the API has changed.
