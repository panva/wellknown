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
      "kid": "2536a84ba9d727cf0f8aac3d06c5777bb31ab6f6",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "s8J70aIzklILWqLmqaz4I6VC9G4JRFW9yDYGq5rgAIKW_UGshZjqbEYwzznlS3R56BqfMBb0fVx537ubc93dHQfCROy6nOXDh4wg66tZyFSUWzM9Ys87B35EQ2RN0xdYzN4pB2V5dG_-RAyy3hJl2CKO21D_bkKkXHoWdkZgLLnrF09bPD_rVWOAEdoHgJIbcE_7yUePOT6Nsg1b61qGFHM7iqIXQq13GsIUUCFxwSvpYJ0FaOaLDa-Lpb1LspeYLCGb2lw8EjvQg1_PEmVv_GRwPtxEOFyirt8pgaByD0d6iZclTkZfensB-G7KWTjLPA_W3mBL2JGB-UJkN5Qpkw",
      "e": "AQAB"
    },
    {
      "kid": "c87192bdd4cc38bc02f6d45c6712ddd8daecc72d",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "vE4yTlS8lhBPWd82Rpr9znyZbSIirkmbYIcyn34Zx8GpZe8_peXUBg4wex4TpqFrKNCiT5lHcaBiQcFe9CywryxOlVHmrq6ds9IEHR36swh3UwYt1L-YujV36VG-Ty6xgvNRmCcAfe-kV_ZZ2sXYpOJMO_fwxSSBwRUWR2hbzwmqpiJn6FT6P_eh-osE_Tr4BFd7bBBxpbyvqJF7CHdX51Lv6mOssYJeDje226LbuvcsoX77mPFa45R4K44JbBaSTanFpBzwdrdZtpF7HDQ-v1gFKMCcF86glyysPhG6C9WniMVlfDJ3q489wXKeQwJv207WOzWrLsQdM7NlsynPEw",
      "e": "AQAB"
    }
  ]
}
