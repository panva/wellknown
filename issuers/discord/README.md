# Summary

Exports the JSON responses from https://discord.com/.well-known/openid-configuration and https://discord.com/api/oauth2/keys

# Usage

```js
import * as discord from '@wellknown/discord'

console.log('https://discord.com/.well-known/openid-configuration', discord.metadata)
console.log('https://discord.com/api/oauth2/keys', discord.jwks)
```
