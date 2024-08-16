# Summary

Exports the JSON responses from https://www.paypal.com/.well-known/openid-configuration and https://api.paypal.com/v1/oauth2/certs

# Usage

```js
import * as paypal from '@wellknown/paypal'

console.log('https://www.paypal.com/.well-known/openid-configuration', paypal.metadata)
console.log('https://api.paypal.com/v1/oauth2/certs', paypal.jwks)
```
