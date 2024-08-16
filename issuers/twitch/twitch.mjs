export const metadata = {
  "authorization_endpoint": "https://id.twitch.tv/oauth2/authorize",
  "claims_parameter_supported": true,
  "claims_supported": [
    "sub",
    "azp",
    "email",
    "email_verified",
    "picture",
    "preferred_username",
    "aud",
    "exp",
    "iat",
    "iss",
    "updated_at"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "issuer": "https://id.twitch.tv/oauth2",
  "jwks_uri": "https://id.twitch.tv/oauth2/keys",
  "response_types_supported": [
    "id_token",
    "code",
    "token",
    "code id_token",
    "token id_token"
  ],
  "scopes_supported": [
    "openid"
  ],
  "subject_types_supported": [
    "public"
  ],
  "token_endpoint": "https://id.twitch.tv/oauth2/token",
  "token_endpoint_auth_methods_supported": [
    "client_secret_post"
  ],
  "userinfo_endpoint": "https://id.twitch.tv/oauth2/userinfo"
}

export const jwks = {
  "keys": [
    {
      "alg": "RS256",
      "e": "AQAB",
      "kid": "1",
      "kty": "RSA",
      "n": "6lq9MQ-q6hcxr7kOUp-tHlHtdcDsVLwVIw13iXUCvuDOeCi0VSuxCCUY6UmMjy53dX00ih2E4Y4UvlrmmurK0eG26b-HMNNAvCGsVXHU3RcRhVoHDaOwHwU72j7bpHn9XbP3Q3jebX6KIfNbei2MiR0Wyb8RZHE-aZhRYO8_-k9G2GycTpvc-2GBsP8VHLUKKfAs2B6sW3q3ymU6M0L-cFXkZ9fHkn9ejs-sqZPhMJxtBPBxoUIUQFTgv4VXTSv914f_YkNw-EjuwbgwXMvpyr06EyfImxHoxsZkFYB-qBYHtaMxTnFsZBr6fn8Ha2JqT1hoP7Z5r5wxDu3GQhKkHw",
      "use": "sig"
    }
  ]
}
