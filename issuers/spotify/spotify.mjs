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
      "kid": "sig-1728889339",
      "alg": "RS256",
      "n": "k_GS4a_XOB1Pf5cQi4Eb_rJt1DRy5nP2PeoOqN_rmsT7jm1zEQQU5wX6bh05Q1TuWqCugI76dLG57uXmmmAW2x6UOhZIMnsDb7t6bBijGuNYRvuP_MxbXVol0ow_bl9iTLcOIRJPkLuMH79wDjhjM3UOiBmMFDwIBuemOS3ImhdXbUh15R0Ymuwh6EYBnGEnrSWIL7Lanj6fNGqpE_lRJ9xT-D5sha5d5TtBTdAoY87Ii6NoVyecDPyXtQSXPJ4gd_NxHG5AA0Jp89Yw8tVc7laC-FGSqtEwtT07KKPvfj6fOfS8LwlPNnT0BJ7j08NgPeukq6edNbZGMWu-YWsSLQ"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1728284541",
      "alg": "RS256",
      "n": "s6RLBy2D-A2C7KQOtz0JAiDEGcQf0lAlVtRta5v9bCmnujX3cFT9Bva0ehJAIZZ54H-xrGT82Rk90wHl_hNkoeN2pSWtRm0IKOHnQrWwIllTJs0bVod7I8747m0_TghchtJrvGLReLncjkYYfD5FiPrB9_W0FBOKYOsXucc3hwm2Gq1LEKzkyxaXRNbgEVyNUdr8ffLvqdty9guhg4QJJbMtPaf7pxopnVy8-55lFL5CzljW0TXwsIfUfsBPmefSZ_djtS4K1Yjdba6fhX6ZwSnel50VScuSlmUVO7YSM5GXMGF0n6zZDOAlnFqiGCXLJF4snQeR6rRY9LLfPNlmbw"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1727679786",
      "alg": "RS256",
      "n": "mbahf2jrNOZSTyGTVv0Vsr2-bFDu4YPtCKNTpGBYIadLZt-cszSfvwpcdby8rorrVFMSBcmD4yKnL9pHvvylhtK-OPz42d4eLElnZS-tc-su1oar6UurK7lbAtAiVhN06JICXZJqYHhqy4I5jgIBbeTANzeGam_cPFZz4Kzl4hthLJnHxuiYnkYLAYfC4huOWJz8dy55bZkxdVOPsf1T8YPt8him97xHR_hxRbPUz8esc5Gwic4WjHliI4FbyrMSFbZ06zU4pWTQahZURxF1JnXoDRUiZoQBcAi8MnBXZFv3DbglEoY7lTmvAF9JQwi_LvsCbvYRdDYj15h70kzP-w"
    }
  ]
}
