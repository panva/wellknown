export const metadata = {
  "issuer": "https://gitlab.com",
  "authorization_endpoint": "https://gitlab.com/oauth/authorize",
  "token_endpoint": "https://gitlab.com/oauth/token",
  "revocation_endpoint": "https://gitlab.com/oauth/revoke",
  "introspection_endpoint": "https://gitlab.com/oauth/introspect",
  "userinfo_endpoint": "https://gitlab.com/oauth/userinfo",
  "jwks_uri": "https://gitlab.com/oauth/discovery/keys",
  "scopes_supported": [
    "api",
    "read_api",
    "read_user",
    "create_runner",
    "manage_runner",
    "k8s_proxy",
    "read_repository",
    "write_repository",
    "read_registry",
    "write_registry",
    "read_observability",
    "write_observability",
    "ai_features",
    "sudo",
    "admin_mode",
    "read_service_ping",
    "openid",
    "profile",
    "email",
    "ai_workflows"
  ],
  "response_types_supported": [
    "code"
  ],
  "response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "grant_types_supported": [
    "authorization_code",
    "password",
    "client_credentials",
    "device_code",
    "refresh_token"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "claim_types_supported": [
    "normal"
  ],
  "claims_supported": [
    "iss",
    "sub",
    "aud",
    "exp",
    "iat",
    "sub_legacy",
    "name",
    "nickname",
    "preferred_username",
    "email",
    "email_verified",
    "website",
    "profile",
    "picture",
    "groups",
    "groups_direct",
    "https://gitlab.org/claims/groups/owner",
    "https://gitlab.org/claims/groups/maintainer",
    "https://gitlab.org/claims/groups/developer"
  ],
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "kid": "kewiQq9jiC84CvSsJYOB-N6A8WFLSV20Mb-y7IlWDSQ",
      "e": "AQAB",
      "n": "5RyvCSgBoOGNE03CMcJ9Bzo1JDvsU8XgddvRuJtdJAIq5zJ8fiUEGCnMfAZI4of36YXBuBalIycqkgxrRkSOENRUCWN45bf8xsQCcQ8zZxozu0St4w5S-aC7N7UTTarPZTp4BZH8ttUm-VnK4aEdMx9L3Izo0hxaJ135undTuA6gQpK-0nVsm6tRVq4akDe3OhC-7b2h6z7GWJX1SD4sAD3iaq4LZa8y1mvBBz6AIM9co8R-vU1_CduxKQc3KxCnqKALbEKXm0mTGsXha9aNv3pLNRNs_J-cCjBpb1EXAe_7qOURTiIHdv8_sdjcFTJ0OTeLWywuSf7mD0Wpx2LKcD6ImENbyq5IBuR1e2ghnh5Y9H33cuQ0FRni8ikq5W3xP3HSMfwlayhIAJN_WnmbhENRU-m2_hDPiD9JYF2CrQneLkE3kcazSdtarPbg9ZDiydHbKWCV-X7HxxIKEr9N7P1V5HKatF4ZUrG60e3eBnRyccPwmT66i9NYyrcy1_ZNN8D1DY8xh9kflUDy4dSYu4R7AEWxNJWQQov525v0MjD5FNAS03rpk4SuW3Mt7IP73m-_BpmIhW3LZsnmfd8xHRjf0M9veyJD0--ETGmh8t3_CXh3I3R9IbcSEntUl_2lCvc_6B-m8W-t2nZr4wvOq9-iaTQXAn1Au6EaOYWvDRE",
      "use": "sig",
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "kid": "4i3sFE7sxqNPOT7FdvcGA1ZVGGI_r-tsDXnEuYT4ZqE",
      "e": "AQAB",
      "n": "4cxDjTcJRJFID6UCgepPV45T1XDz_cLXSPgMur00WXB4jJrR9bfnZDx6dWqwps2dCw-lD3Fccj2oItwdRQ99In61l48MgiJaITf5JK2c63halNYiNo22_cyBG__nCkDZTZwEfGdfPRXSOWMg1E0pgGc1PoqwOdHZrQVqTcP3vWJt8bDQSOuoZBHSwVzDSjHPY6LmJMEO42H27t3ZkcYtS5crU8j2Yf-UH5U6rrSEyMdrCpc9IXe9WCmWjz5yOQa0r3U7M5OPEKD1-8wuP6_dPw0DyNO_Ei7UerVtsx5XSTd-Z5ujeB3PFVeAdtGxJ23oRNCq2MCOZBa58EGeRDLR7Q",
      "use": "sig",
      "alg": "RS256"
    }
  ]
}
