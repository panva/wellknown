# Summary

Exports the JSON responses from https://www.facebook.com/.well-known/openid-configuration and https://www.facebook.com/.well-known/oauth/openid/jwks/

# Usage

```js
import * as facebook from '@wellknown/facebook'

console.log('https://www.facebook.com/.well-known/openid-configuration', facebook.metadata)
console.log('https://www.facebook.com/.well-known/oauth/openid/jwks/', facebook.jwks)
```
