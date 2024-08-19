export const metadata = {
  "issuer": "https://accounts.spotify.com",
  "authorization_endpoint": "https://accounts.spotify.com/oauth2/v2/auth",
  "token_endpoint": "https://accounts.spotify.com/api/token",
  "userinfo_endpoint": "https://accounts.spotify.com/oidc/userinfo/v1",
  "revocation_endpoint": "https://accounts.spotify.com/oauth2/revoke/v1",
  "scopes_supported": [
    "email",
    "openid",
    "profile"
  ],
  "jwks_uri": "https://accounts.spotify.com/oidc/certs/v1",
  "response_types_supported": [
    "code",
    "none"
  ],
  "response_modes_supported": [
    "query"
  ],
  "code_challenge_methods_supported": [
    "S256"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
    "urn:ietf:params:oauth:grant-type:jwt-bearer"
  ],
  "acr_values_supported": [
    "urn:spotify:sso:acr:legacy",
    "urn:spotify:sso:acr:bronze:v1",
    "urn:spotify:sso:acr:silver:v1",
    "urn:spotify:sso:acr:artist:2fa"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "claims_supported": [
    "aud",
    "email",
    "email_verified",
    "exp",
    "iat",
    "iss",
    "name",
    "picture",
    "preferred_username",
    "sub"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "ui_locales_supported": [
    "af-ZA",
    "am-ET",
    "ar",
    "az-AZ",
    "bg-BG",
    "bn-IN",
    "bp",
    "cs",
    "da-DK",
    "de",
    "el",
    "en",
    "es",
    "es-ES",
    "et-EE",
    "fa-IR",
    "fi",
    "tl",
    "fr",
    "fr-CA",
    "gu-IN",
    "he-IL",
    "hi-IN",
    "hr-HR",
    "hu",
    "id",
    "is-IS",
    "it",
    "ja",
    "kn-IN",
    "ko",
    "lv-LV",
    "lt-LT",
    "ml-IN",
    "mr-IN",
    "ms",
    "nb-NO",
    "ne-NP",
    "nl",
    "or-IN",
    "pa-IN",
    "pa-PK",
    "pl",
    "pt-BR",
    "pt-PT",
    "ro-RO",
    "ru",
    "sk-SK",
    "sl-SI",
    "sr-RS",
    "sv",
    "sw",
    "ta-IN",
    "te-IN",
    "th-TH",
    "tr",
    "uk-UA",
    "ur",
    "vi-VN",
    "zh-CN",
    "zh-TW",
    "zu-ZA"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1724050904",
      "alg": "RS256",
      "n": "g7xdK6lKHZdcsmNKhtbQoqH0f3EzPZmMkNitAqYe4-U0ju3wAY3IWRGvaacEIaZMHSMsTHEJI6quZySQ1l2uocLDGlKkiEI5BrCDJoinH7td74Yh99lU3JzQUCrYo1SaQgd_9Nh-IGDTFG6q8S4yWI9iVy_nUv4l66qz74QW-Eft6svyndQi9njy-HC9_E4qv2AXOgwwrDJigeLD4i269GlYwIkEHmnEiBHUbOpbgFh7p7xQO9HLKrLxfpAf0ntrIR9HUgzXpWXhwdgHuwxcgjIok6xnXpuvyRn67CQO4Tm0UT5pTxhzQLUaparo3axaMDYfa8MEEPKhrTZ5MwD5ZQ"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1723446110",
      "alg": "RS256",
      "n": "gOU2H7xie9KoCW61XkYNJ1QvAx7vtAwv8l5bVnSC9AN3WDI-HFuCvMC-Ze79CptDGR5CXlSSU6KjR3pEBzVrWZgpQzS_ZZRR_Py6FT6KSFHVORG1gJI8YpZX_foHZpTshV1kJb9oSoKIIF9savqYo8BpVTRkK615wuaaVyHtVe-F4KKjBuDCqZomdn4PVnunW-pRg-WjuYrqTdMC4MTHkS4fEKRbGTH4JYB4OzJP9hDpvrw3M0YPzWo9pqLGA8tkYfaxVguhXZ3xlhW-lKZZ8wzPFsPbG4SceeQO7rE3eAbh385AIyPY10Wi9Iw_V-sA-m8epUaxbgYtEfk7rpms_w"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1722841384",
      "alg": "RS256",
      "n": "mRaiZ7qIphVoGRgn_I72CyDojoem8SAgqwWQUdrD1PY68SyushjtPglIBuppoVdw-dkSHT__gdgpOtQhsOYtoUBVkpHSxFmSHYT6H7aGei5s7BJ0sp2a86etE5u-iu-rfkIYtlR6j3Ow2sGqPopxV1lBcehFFywSJZuvYv7MnMr9lk1Xh2d6hTQfrP88_d7QOH7k4uXlo5uFVLZYQIaA3nvNxqULkJy5jzZmkHkH-AJh_PGRSKvbNSvMBuTQT0gvBcc3twsWasj6a2pMDWIEljVoOQQKsgw5_G94l85cQZ1IYHWNLLb4JKRjI5bPioCu_pACfjz2rktKBhsJ5hSdbw"
    }
  ]
}
