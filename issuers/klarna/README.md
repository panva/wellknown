# Summary

Exports the JSON responses from https://login.klarna.com/.well-known/openid-configuration and https://login.klarna.com/eu/lp/idp/.well-known/jwks.json

# Usage

```js
import * as klarna from '@wellknowns/klarna'

console.log('https://login.klarna.com/.well-known/openid-configuration', klarna.metadata)
console.log('https://login.klarna.com/eu/lp/idp/.well-known/jwks.json', klarna.jwks)
```
