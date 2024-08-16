# Summary

Exports the JSON responses from https://stackoverflow.com/.well-known/openid-configuration and https://stackoverflow.com/.well-known/jwks.json

# Usage

```js
import * as stackoverflow from '@wellknown/stackoverflow'

console.log('https://stackoverflow.com/.well-known/openid-configuration', stackoverflow.metadata)
console.log('https://stackoverflow.com/.well-known/jwks.json', stackoverflow.jwks)
```
