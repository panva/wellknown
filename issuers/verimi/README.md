# Summary

Exports the JSON responses from https://web.verimi.de/dipp/api/.well-known/openid-configuration and https://web.verimi.de/.well-known/jwks.json

# Usage

```js
import * as verimi from '@wellknowns/verimi'

console.log('https://web.verimi.de/dipp/api/.well-known/openid-configuration', verimi.metadata)
console.log('https://web.verimi.de/.well-known/jwks.json', verimi.jwks)
```
