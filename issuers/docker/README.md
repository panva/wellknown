# Summary

Exports the JSON responses from https://login.docker.com/.well-known/openid-configuration and https://login.docker.com/.well-known/jwks.json

# Usage

```js
import * as docker from '@wellknown/docker'

console.log('https://login.docker.com/.well-known/openid-configuration', docker.metadata)
console.log('https://login.docker.com/.well-known/jwks.json', docker.jwks)
```
