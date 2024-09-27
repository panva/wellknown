# Summary

Exports the JSON responses from https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration and https://login.microsoftonline.com/organizations/discovery/v2.0/keys

# Usage

```js
import * as entraOrganizations from '@wellknown/entra-organizations'

console.log('https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration', entraOrganizations.metadata)
console.log('https://login.microsoftonline.com/organizations/discovery/v2.0/keys', entraOrganizations.jwks)
```
