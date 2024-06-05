# Summary

Exports the JSON responses from https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration and https://login.microsoftonline.com/common/discovery/v2.0/keys

# Usage

```js
import * as entraCommon from '@wellknowns/entra-common'

console.log('https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', entra-common.metadata)
console.log('https://login.microsoftonline.com/common/discovery/v2.0/keys', entra-common.jwks)
```
