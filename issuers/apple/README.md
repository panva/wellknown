# Summary

Exports the JSON responses from https://appleid.apple.com/.well-known/openid-configuration and https://appleid.apple.com/auth/keys

# Usage

```js
import * as apple from '@wellknowns/apple'

console.log('https://appleid.apple.com/.well-known/openid-configuration', apple.metadata)
console.log('https://appleid.apple.com/auth/keys', apple.jwks)
```
