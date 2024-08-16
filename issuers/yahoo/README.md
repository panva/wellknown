# Summary

Exports the JSON responses from https://api.login.yahoo.com/.well-known/openid-configuration and https://api.login.yahoo.com/openid/v1/certs

# Usage

```js
import * as yahoo from '@wellknown/yahoo'

console.log('https://api.login.yahoo.com/.well-known/openid-configuration', yahoo.metadata)
console.log('https://api.login.yahoo.com/openid/v1/certs', yahoo.jwks)
```
