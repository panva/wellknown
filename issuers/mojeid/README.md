# Summary

Exports the JSON responses from https://mojeid.cz/oidc/.well-known/openid-configuration and https://mojeid.cz/oidc/key.jwk

# Usage

```js
import * as mojeid from '@wellknown/mojeid'

console.log('https://mojeid.cz/oidc/.well-known/openid-configuration', mojeid.metadata)
console.log('https://mojeid.cz/oidc/key.jwk', mojeid.jwks)
```
