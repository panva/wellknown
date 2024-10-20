# Summary

Exports the JSON responses from https://identity.lego.com/.well-known/openid-configuration and https://identity.lego.com/.well-known/openid-configuration/jwks

# Usage

```js
import * as lego from '@wellknown/lego'

console.log('https://identity.lego.com/.well-known/openid-configuration', lego.metadata)
console.log('https://identity.lego.com/.well-known/openid-configuration/jwks', lego.jwks)
```
