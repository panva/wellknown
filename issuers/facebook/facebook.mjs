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
      "kid": "1896491d02400d3075c435d1035d95795ae3ca4c",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "yeYk5poYhkMIJYIbXZ1XKWGJABQK2qhCfKKBfdlulpiQfv6mra-UReYVhCk3uT0wQBQHZInXGOtXDIyENVBPEMt3mw4GV-22orM6_PF8Gu8qPOwNEvDnGN4A_BZZvrgehm68loMpVyL7UZOYHBIBPQvguP8RQbltkWKf12X6ZQpOFGVnqK9SKRkzue9ndb1EswSQkzv8aRz7VYGX0dT2yCB05Q6afmPUz3c9wcVfAg8T5nP9JeOSP2J2ssd3MNGFNIQe2zoUG5h3_4Dm0ic9e3w2a8lBY6l3ZK41GlY3UkBAh0akbf7U2e1aT9YRBlkaGCV3C7Eeq3BXLD3CBLIZQw",
      "e": "AQAB"
    },
    {
      "kid": "2536a84ba9d727cf0f8aac3d06c5777bb31ab6f6",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "s8J70aIzklILWqLmqaz4I6VC9G4JRFW9yDYGq5rgAIKW_UGshZjqbEYwzznlS3R56BqfMBb0fVx537ubc93dHQfCROy6nOXDh4wg66tZyFSUWzM9Ys87B35EQ2RN0xdYzN4pB2V5dG_-RAyy3hJl2CKO21D_bkKkXHoWdkZgLLnrF09bPD_rVWOAEdoHgJIbcE_7yUePOT6Nsg1b61qGFHM7iqIXQq13GsIUUCFxwSvpYJ0FaOaLDa-Lpb1LspeYLCGb2lw8EjvQg1_PEmVv_GRwPtxEOFyirt8pgaByD0d6iZclTkZfensB-G7KWTjLPA_W3mBL2JGB-UJkN5Qpkw",
      "e": "AQAB"
    }
  ]
}
