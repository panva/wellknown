export const metadata = {
  "issuer": "https://www.facebook.com",
  "authorization_endpoint": "https://facebook.com/dialog/oauth/",
  "jwks_uri": "https://www.facebook.com/.well-known/oauth/openid/jwks/",
  "response_types_supported": [
    "id_token",
    "token id_token"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "claims_supported": [
    "iss",
    "aud",
    "sub",
    "iat",
    "exp",
    "jti",
    "nonce",
    "at_hash",
    "name",
    "given_name",
    "middle_name",
    "family_name",
    "email",
    "picture",
    "user_friends",
    "user_birthday",
    "user_age_range",
    "user_link",
    "user_hometown",
    "user_location",
    "user_gender"
  ]
}

export const jwks = {
  "keys": [
    {
      "kid": "dcd214c095176e06454dfe832254b0cde52b6052",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "6GkDCgRsMiCb2Zsjge86oXAFwvRIOTEAlLCtxtFzsb2x6alKYa1ycSEmiwj_hlGXUQnbrj8VEWkT9ZigNC-WAGxhCe-RikzkmUG99_xACWzoI9zUN50Qj6jZM8-P-pmoYEnKK_7yj2gJSlzMtWYBRzJihz5-zN3Ed75GVQOuANytYbAclPmhm2-g-gfH9g6JRqYsBY6k-MMP0d5VLk8u_nAg6jf0Kw4Ii-PndlNHsyG6aXHXteyFsZ7bBOjb_nUs9C0xgiJPVqMoOtMRhelDLuj4W4N7CQVxoCEvkW6g0932eCOzteOvbawXutx18kF2bGrSgFvIOLCbnzL8dgf7zw",
      "e": "AQAB"
    },
    {
      "kid": "10714f4cb458b1996ea3fc525a99a4e778c39b51",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "splX_xc3St_ErLyxxXFNdQayxRuH2G90Qme0I01m3CB0NAUwvAE24zumLjDs22R1gD-pa25wpAJ-5av2jJI0YFj7BF3PPKl5_4DmSx1wH1pVtxPpOW7YhDk1z0b_t4w46rQQV0ZmH94Nfk4tBTPNLLgs8iMEdphcq5SxbNQjJ7P_4DHhfKssHEfXAiuVH9pm9BQ2M1HwwW_tp9g7qMCTyMASQAv0ZdGdiO-ZQ9hgoFf2OTK1YCr63BvrZXpmGZ_JEpImooWPwQkhB-Z598tPHoyetTx5CeVQx4r0CH71tHyN0TDE22KDmPKs-P558GvqihXsxO9LwMaXsWBUNFn1eQ",
      "e": "AQAB"
    }
  ]
}
