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
      "kid": "c87192bdd4cc38bc02f6d45c6712ddd8daecc72d",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "vE4yTlS8lhBPWd82Rpr9znyZbSIirkmbYIcyn34Zx8GpZe8_peXUBg4wex4TpqFrKNCiT5lHcaBiQcFe9CywryxOlVHmrq6ds9IEHR36swh3UwYt1L-YujV36VG-Ty6xgvNRmCcAfe-kV_ZZ2sXYpOJMO_fwxSSBwRUWR2hbzwmqpiJn6FT6P_eh-osE_Tr4BFd7bBBxpbyvqJF7CHdX51Lv6mOssYJeDje226LbuvcsoX77mPFa45R4K44JbBaSTanFpBzwdrdZtpF7HDQ-v1gFKMCcF86glyysPhG6C9WniMVlfDJ3q489wXKeQwJv207WOzWrLsQdM7NlsynPEw",
      "e": "AQAB"
    },
    {
      "kid": "d458ab5237807dc6718901e522cebcd8e8157791",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "uPyWMhNfNsO9EtiraYI0tr78vnkiJmzsmAAUd8hLHF5vPXDn683aQKZQ2Ny5lObigNmbHI5tt5y0o5m0RuZjJTj081uWm7Z901boO-p4VLwEONzjh4vTp2ZQ7aMjo17kMBzInHqz9iruWeB94dEu_LKYdQnDI6rweD_-chWWTR4mc7xbeaNozLHYzjEisSrIM3xIry2lZv5Mh334ZoahcTXGouFtU2XV_HvStXthwhoAtizQK7s2yJlBz8qlQK2lFNojRzd95f2bkynRnIvcpoF-qHZbOBTCIf-6TLp23qShs-XvbCkwHMhzvCPxcuZx3GNfCQkyTxeM5IGIMlWZ8w",
      "e": "AQAB"
    }
  ]
}
