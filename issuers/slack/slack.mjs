export const metadata = {
  "issuer": "https://slack.com",
  "authorization_endpoint": "https://slack.com/openid/connect/authorize",
  "token_endpoint": "https://slack.com/api/openid.connect.token",
  "userinfo_endpoint": "https://slack.com/api/openid.connect.userInfo",
  "jwks_uri": "https://slack.com/openid/connect/keys",
  "scopes_supported": [
    "openid",
    "profile",
    "email"
  ],
  "response_types_supported": [
    "code"
  ],
  "response_modes_supported": [
    "query"
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
  "claims_supported": [
    "sub",
    "auth_time",
    "iss"
  ],
  "claims_parameter_supported": false,
  "request_parameter_supported": false,
  "request_uri_parameter_supported": true,
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "client_secret_basic"
  ]
}

export const jwks = {
  "keys": [
    {
      "e": "AQAB",
      "n": "zQqzXfb677bpMKw0idKC5WkVLyqk04PWMsWYJDKqMUUuu_PmzdsvXBfHU7tcZiNoHDuVvGDqjqnkLPEzjXnaZY0DDDHvJKS0JI8fkxIfV1kNy3DkpQMMhgAwnftUiSXgb5clypOmotAEm59gHPYjK9JHBWoHS14NYEYZv9NVy0EkjauyYDSTz589aiKU5lA-cePG93JnqLw8A82kfTlrJ1IIJo2isyBGANr0YzR-d3b_5EvP7ivU7Ph2v5JcEUHeiLSRzIzP3PuyVFrPH659Deh-UAsDFOyJbIcimg9ITnk5_45sb_Xcd_UN6h5I7TGOAFaJN4oi4aaGD4elNi_K1Q",
      "kty": "RSA",
      "kid": "mB2MAyKSn555isd0EbdhKx6nkyAi9xLq8rvCEb_nOyY",
      "alg": "RS256"
    }
  ]
}
