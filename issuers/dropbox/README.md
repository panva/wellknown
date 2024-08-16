# Summary

Exports the JSON responses from https://www.dropbox.com/.well-known/openid-configuration and https://www.dropbox.com/.well-known/jwks

# Usage

```js
import * as dropbox from '@wellknown/dropbox'

console.log('https://www.dropbox.com/.well-known/openid-configuration', dropbox.metadata)
console.log('https://www.dropbox.com/.well-known/jwks', dropbox.jwks)
```
