export const metadata = {
  "issuer": "https://accounts.google.com",
  "authorization_endpoint": "https://accounts.google.com/o/oauth2/v2/auth",
  "device_authorization_endpoint": "https://oauth2.googleapis.com/device/code",
  "token_endpoint": "https://oauth2.googleapis.com/token",
  "userinfo_endpoint": "https://openidconnect.googleapis.com/v1/userinfo",
  "revocation_endpoint": "https://oauth2.googleapis.com/revoke",
  "jwks_uri": "https://www.googleapis.com/oauth2/v3/certs",
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "code token",
    "code id_token",
    "token id_token",
    "code token id_token",
    "none"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "scopes_supported": [
    "openid",
    "email",
    "profile"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "client_secret_basic"
  ],
  "claims_supported": [
    "aud",
    "email",
    "email_verified",
    "exp",
    "family_name",
    "given_name",
    "iat",
    "iss",
    "name",
    "picture",
    "sub"
  ],
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
    "urn:ietf:params:oauth:grant-type:jwt-bearer"
  ]
}

export const jwks = {
  "keys": [
    {
      "n": "2hJ7F-aJlN2hTrOelbdFB2WDlzS5oscgd5UBL_5NruogKCGFQFMk_K3d5L6N9P6mNxKr60IeGPg8zzl41iE9qQmvG9yLMA-VCW2f6gTvUkJBluYJ4wByN8Hr98tJFIvzE1q4iWclwyqiiWXyTiXfhyL0n-aMa6OgMaMLWsOFRKPEFR9ajeVqqc8GFjz4Kkij1dHWmkd_AU0wjJqDOl7wdCcLLy9bmlUwaJ4p29nRVK_KrNEL1E5PpK5Bwo6_TrXCLrAx_p3xJ5IZctwzoFkl3xpqbJOZax6s8CrHKXmG03TkEQt5a9H3bupQPaNU-bYq9E1_OvycBY6bWwD23UdwUw",
      "kty": "RSA",
      "use": "sig",
      "kid": "e26d917b1fe8de13382aa7cc9a1d6e93262f33e2",
      "e": "AQAB",
      "alg": "RS256"
    },
    {
      "e": "AQAB",
      "kty": "RSA",
      "n": "1crrYmsX8OVzrN9BTDD4RlVJDqSQIEbRby9ELqTmCpW1Qtt7y-pdmLPqlYG1ND5mprkTA83S7g_dcsxuV4wxK4_Vv5a8IBn86HfAX4VfCCOzqBYgACN6hlaffzPIWL1QA8yZ4w-D0fnN3xC5ULhtmtBG23qi__4yEo_FIY6irvbHrpRNI_-vjxFokm2X3ENP2ZOwgNhDIthwJo8l1KNbZa1riAJVcF86zWILQTy756hh8eH1Kt05wsGB3DeGPNV55zYv6sB2bzxARsVYAtCRJ8c28FYWwU8dCRJ70eJEmY4aKFOBO5g4fwYJlvMm9Le7qgAUH5-7wO52BayqXmqAOQ",
      "alg": "RS256",
      "use": "sig",
      "kid": "4529c409f77a106fb67ee1a85d168fd2cfb7c0b7"
    },
    {
      "alg": "RS256",
      "n": "zaUomGGU1qSBxBHOQRk5fF7rOVVzG5syHhJYociRyyvvMOM6Yx_n7QFrwKxW1Gv-YKPDsvs-ksSN5YsozOTb9Y2HlPsOXrnZHQTQIdjWcfUz-TLDknAdJsK3A0xZvq5ud7ElIrXPFS9UvUrXDbIv5ruv0w4pvkDrp_Xdhw32wakR5z0zmjilOHeEJ73JFoChOaVxoRfpXkFGON5ZTfiCoO9o0piPROLBKUtIg_uzMGzB6znWU8Yfv3UlGjS-ixApSltsXZHLZfat1sUvKmgT03eXV8EmNuMccrhLl5AvqKT6E5UsTheSB0veepQgX8XCEex-P3LCklisnen3UKOtLw",
      "use": "sig",
      "e": "AQAB",
      "kty": "RSA",
      "kid": "f2e11986282de93f27b264fd2a4de192993dcb8c"
    }
  ]
}
