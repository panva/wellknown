# Summary

Exports the JSON responses from https://id.twitch.tv/oauth2/.well-known/openid-configuration and https://id.twitch.tv/oauth2/keys

# Usage

```js
import * as twitch from '@wellknowns/twitch'

console.log('https://id.twitch.tv/oauth2/.well-known/openid-configuration', twitch.metadata)
console.log('https://id.twitch.tv/oauth2/keys', twitch.jwks)
```
