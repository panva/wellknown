# Summary

Exports the JSON responses from https://accounts.spotify.com/.well-known/openid-configuration and https://accounts.spotify.com/oidc/certs/v1

# Usage

```js
import * as spotify from '@wellknown/spotify'

console.log('https://accounts.spotify.com/.well-known/openid-configuration', spotify.metadata)
console.log('https://accounts.spotify.com/oidc/certs/v1', spotify.jwks)
```
