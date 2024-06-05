# Summary

Exports the JSON responses from https://slack.com/.well-known/openid-configuration and https://slack.com/openid/connect/keys

# Usage

```js
import * as slack from '@wellknowns/slack'

console.log('https://slack.com/.well-known/openid-configuration', slack.metadata)
console.log('https://slack.com/openid/connect/keys', slack.jwks)
```
