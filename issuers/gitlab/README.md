# Summary

Exports the JSON responses from https://gitlab.com/.well-known/openid-configuration and https://gitlab.com/oauth/discovery/keys

# Usage

```js
import * as gitlab from '@wellknowns/gitlab'

console.log('https://gitlab.com/.well-known/openid-configuration', gitlab.metadata)
console.log('https://gitlab.com/oauth/discovery/keys', gitlab.jwks)
```
