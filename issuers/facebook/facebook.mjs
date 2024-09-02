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
      "kid": "10714f4cb458b1996ea3fc525a99a4e778c39b51",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "splX_xc3St_ErLyxxXFNdQayxRuH2G90Qme0I01m3CB0NAUwvAE24zumLjDs22R1gD-pa25wpAJ-5av2jJI0YFj7BF3PPKl5_4DmSx1wH1pVtxPpOW7YhDk1z0b_t4w46rQQV0ZmH94Nfk4tBTPNLLgs8iMEdphcq5SxbNQjJ7P_4DHhfKssHEfXAiuVH9pm9BQ2M1HwwW_tp9g7qMCTyMASQAv0ZdGdiO-ZQ9hgoFf2OTK1YCr63BvrZXpmGZ_JEpImooWPwQkhB-Z598tPHoyetTx5CeVQx4r0CH71tHyN0TDE22KDmPKs-P558GvqihXsxO9LwMaXsWBUNFn1eQ",
      "e": "AQAB"
    },
    {
      "kid": "1896491d02400d3075c435d1035d95795ae3ca4c",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "yeYk5poYhkMIJYIbXZ1XKWGJABQK2qhCfKKBfdlulpiQfv6mra-UReYVhCk3uT0wQBQHZInXGOtXDIyENVBPEMt3mw4GV-22orM6_PF8Gu8qPOwNEvDnGN4A_BZZvrgehm68loMpVyL7UZOYHBIBPQvguP8RQbltkWKf12X6ZQpOFGVnqK9SKRkzue9ndb1EswSQkzv8aRz7VYGX0dT2yCB05Q6afmPUz3c9wcVfAg8T5nP9JeOSP2J2ssd3MNGFNIQe2zoUG5h3_4Dm0ic9e3w2a8lBY6l3ZK41GlY3UkBAh0akbf7U2e1aT9YRBlkaGCV3C7Eeq3BXLD3CBLIZQw",
      "e": "AQAB"
    }
  ]
}
