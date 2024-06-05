# Summary

Exports the JSON responses from https://accounts.google.com/.well-known/openid-configuration and https://www.googleapis.com/oauth2/v3/certs

# Usage

```js
import * as google from '@wellknowns/google'

console.log('https://accounts.google.com/.well-known/openid-configuration', google.metadata)
console.log('https://www.googleapis.com/oauth2/v3/certs', google.jwks)
```
