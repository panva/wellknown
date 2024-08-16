export const metadata = {
  "issuer": "https://www.dropbox.com",
  "authorization_endpoint": "https://www.dropbox.com/oauth2/authorize",
  "token_endpoint": "https://api.dropboxapi.com/oauth2/token",
  "jwks_uri": "https://www.dropbox.com/.well-known/jwks",
  "scopes_supported": [
    "openid",
    "profile",
    "email"
  ],
  "response_types_supported": [
    "code"
  ],
  "response_modes_supported": [
    "query",
    "fragment"
  ],
  "grant_types_supported": [
    "authorization_code"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "claim_types_supported": [
    "normal"
  ],
  "claims_supported": [
    "email",
    "email_verified",
    "family_name",
    "given_name"
  ],
  "claims_parameter_supported": false,
  "request_parameter_supported": false,
  "request_uri_parameter_supported": false
}

export const jwks = {
  "keys": [
    {
      "alg": "RS256",
      "kty": "RSA",
      "n": "o6L75Q_QZ4A7pqdlR6jez4hpGq36p1ecepn51l_7Doe4PHbQGW008fE2Zpv30inVSMIa2Wz22p53LkkV1LRe2FEqYe5ko4O62TU67meZBGlgD26OSA4K6NlcQR7h801RLe8bj1TBLiWloZwlXprlS4WZLGpPaV7jCYkDzFnM23Sc6KRdl7Xzzve_4CeeNQbE2M0ApfBsrXCZdzwv4d7HsziUsgP8tSAHX7Cj72tJYk9hWdylZ9eUaHmoWweznkFahY1lIPZhhhQcMZlySRAeU9HUo5G62SFeGp9qkMsgpLkq1wcidxQyLKMhZUsct-Le1dI-x5KAdw9CPx_2P3H_nQ",
      "e": "AQAB",
      "kid": "Ha6_EN_p4q7MBpfiG98we69UeOIWPs2LWOhPSk-GlYI=",
      "use": "sig"
    }
  ]
}
