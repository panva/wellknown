# Summary

Exports the JSON responses from https://oauth.battle.net/.well-known/openid-configuration and https://oauth.battle.net/jwks/certs

# Usage

```js
import * as battleNet from '@wellknown/battle-net'

console.log('https://oauth.battle.net/.well-known/openid-configuration', battleNet.metadata)
console.log('https://oauth.battle.net/jwks/certs', battleNet.jwks)
```
