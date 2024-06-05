export default [
  {
    name: 'google',
    identifier: 'https://accounts.google.com',
    algorithm: 'oidc',
  },
  {
    name: 'apple',
    identifier: 'https://appleid.apple.com',
    algorithm: 'oidc',
  },
  {
    name: 'slack',
    identifier: 'https://slack.com',
    algorithm: 'oidc',
  },
  {
    name: 'twitch',
    identifier: 'https://id.twitch.tv/oauth2',
    algorithm: 'oidc',
  },
  {
    name: 'facebook',
    identifier: 'https://www.facebook.com',
    algorithm: 'oidc',
  },
  {
    name: 'discord',
    identifier: 'https://discord.com',
    algorithm: 'oidc',
  },
  {
    name: 'entra-common',
    identifier: 'https://login.microsoftonline.com/common/v2.0/',
    algorithm: 'oidc',
    overwrites: {
      expectedIssuer: 'https://login.microsoftonline.com/{tenantid}/v2.0',
    },
  },
]
