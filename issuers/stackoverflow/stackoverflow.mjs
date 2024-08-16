export const metadata = {
  "issuer": "https://stackoverflow.com",
  "authorization_endpoint": "https://stackoverflow.com/oauth/authorize",
  "token_endpoint": "https://stackoverflow.com/oauth/access_token",
  "jwks_uri": "https://stackoverflow.com/.well-known/jwks.json",
  "response_types_supported": [
    "code"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "plain",
    "RS256"
  ]
}

export const jwks = {
  "keys": []
}
