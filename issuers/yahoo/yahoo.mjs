export const metadata = {
  "issuer": "https://api.login.yahoo.com",
  "authorization_endpoint": "https://api.login.yahoo.com/oauth2/request_auth",
  "token_endpoint": "https://api.login.yahoo.com/oauth2/get_token",
  "introspection_endpoint": "https://api.login.yahoo.com/oauth2/introspect",
  "userinfo_endpoint": "https://api.login.yahoo.com/openid/v1/userinfo",
  "token_revocation_endpoint": "https://api.login.yahoo.com/oauth2/revoke",
  "jwks_uri": "https://api.login.yahoo.com/openid/v1/certs",
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "code token",
    "code id_token",
    "token id_token",
    "code token id_token"
  ],
  "subject_types_supported": [
    "public"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token"
  ],
  "id_token_signing_alg_values_supported": [
    "ES256",
    "RS256"
  ],
  "scopes_supported": [
    "openid",
    "openid2",
    "profile",
    "email"
  ],
  "acr_values_supported": [
    "AAL1",
    "AAL2"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "claims_supported": [
    "aud",
    "email",
    "email_verified",
    "birthdate",
    "exp",
    "family_name",
    "given_name",
    "iat",
    "iss",
    "locale",
    "name",
    "sub",
    "auth_time"
  ],
  "response_modes_supported": [
    "query"
  ],
  "display_values_supported": [
    "page"
  ],
  "claims_parameter_supported": false,
  "request_parameter_supported": false,
  "request_uri_parameter_supported": false
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "kid": "01640f903a24e1c1f097ebda2d09b196c9de3ed9",
      "n": "APXkXeLRieppySH9dilwRSJjDW1MYOjSfqX8ifdXClRJiy6jsTlYcd2zDL6FPDeH6s2n_paJpnyEzzUTiSK-paC1yxdSAYPTT42tZqj5K5ZqBZgapYbPmbjEgCN80kPE66rGtRBkTehCAfAZ_CWFWX6yPDjpAMRkRWCDROdMoYm3",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "kid": "6ff94cdad11e7c3ac08dc9ec3c44844b87e364f7",
      "n": "AL1LkSgnGk-sKqFDBrojoqvpqOwmN7tgvz0p6J9g8O_nOzXMAwzMUUs4H_FMgeNWcuE6XzJX3spVwAYBp-rBLwyXXCGbO_chhwcpBDNndlZyqS2zOvwmZYdh4MhrUnIOcA8cdDB1hqoDdKOx9M-EjuoafcgqEPA7rWsZTH6TITMP",
      "e": "AQAB"
    },
    {
      "kty": "EC",
      "alg": "ES256",
      "use": "sig",
      "crv": "P-256",
      "kid": "3466d51f7dd0c780565688c183921816c45889ad",
      "x": "cWZxqH95zGdr8P4XvPd_jgoP5XROlipzYxfC_vWC61I",
      "y": "rxX9OCD9rIaheKx6LAs4KWR6Rz1-Lj1phRCmdjUDL_I"
    },
    {
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "kid": "0",
      "n": "APXkXeLRieppySH9dilwRSJjDW1MYOjSfqX8ifdXClRJiy6jsTlYcd2zDL6FPDeH6s2n_paJpnyEzzUTiSK-paC1yxdSAYPTT42tZqj5K5ZqBZgapYbPmbjEgCN80kPE66rGtRBkTehCAfAZ_CWFWX6yPDjpAMRkRWCDROdMoYm3",
      "e": "AQAB"
    }
  ]
}
