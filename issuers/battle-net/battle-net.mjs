export const metadata = {
  "issuer": "https://oauth.battle.net",
  "authorization_endpoint": "https://oauth.battle.net/authorize",
  "end_session_endpoint": "https://oauth.battle.net/logout",
  "token_endpoint": "https://oauth.battle.net/token",
  "jwks_uri": "https://oauth.battle.net/jwks/certs",
  "revocation_endpoint": "https://oauth.battle.net/revoke",
  "introspection_endpoint": "https://oauth.battle.net/v2/check_token",
  "userinfo_endpoint": "https://oauth.battle.net/userinfo",
  "device_authorization_endpoint": "https://oauth.battle.net/device/code",
  "response_types_supported": [
    "code",
    "code id_token",
    "id_token",
    "token id_token"
  ],
  "subject_types_supported": [
    "public",
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "grant_types_supported": [
    "authorization_code",
    "client_credentials",
    "implicit",
    "token_extension",
    "server_sso",
    "client_sso",
    "device_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
    "urn:ietf:params:oauth:grant-type:token-exchange"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "13922a42-46e9-4c46-be63-1c00b1a182d0",
      "alg": "RS256",
      "n": "AMUsXrM770ySxDSyVpsFDk52ChWCDNK1NhxN+b9ReF7qoOg43PVaP2VrUQVcPUx1b2Codfd6fRHF87xuxb5EHEYkAUNdPF6zad1GYsY2URvuMokAXQgOv4AEuNE6VT4xjKgZNi1krqR5LoZKFrZa+2TvUSkTdBZcOqnaQ7zKSGHNVtcmkgIHFwXWkY+CnnrVpRg75Jnb3c2i+BTm85Zgwr3cv1f4Apddr+bYl4PyxDj//3ybGPCm+7DZZ4bWzUxJZrTx587WNeWFekMG9d270y8YFgLv9avLC/bLsOSxaIS+YUKSB785t6dXgkIVloVX0esPl04QwXMxtthVRnvfIWM="
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "32b014bc-01ea-4ef8-9fd8-8f3b3d5335d2",
      "alg": "RS256",
      "n": "AKApj538kSTFIOKK7KG6Uy945F2wbQOiAFPX9+hoVJqLTDx3MTol3+8YG/Ja6wILyPmC3wgDTBNawls2nribmnCzQOJqSf+Bb+UVzQWr8m8aRQBVjxkLlwqEYLuMWpSI6RsrTjVrU9zt1/1dk2PkMJff/8gKJ3NXZ3nFpUXs9myHaZ3NMb+A8mBtj3PtaYCT/a51nxQBH5NXMFOmtBcStDTy60wpdeBuEwD/PtfWQPxddRDsvbSRzC6KWIqlygy3FLLKchfnCDhPvzu9pG9cqzirZF1/PcAr4zPEm9iWiGy7jCMrzPg9uan1d+mdjU44u2jALPSVoJ0Dp9HBiGj63+s="
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "4ccec5815bc0779dc36e7a895fb42b3e4205a894ad85b023e81acc3fd1718fa4",
      "alg": "RS256",
      "n": "ALI7m99+OTGF6XqLSq/8eaWKbmPevIZQOEVS2mf7Qow0Ynus7qwqsL+w9ZbKjaIWfIKOE2V4lU0Dfj7sHSxpomfFv5Ck5/B5J/RzWywraiXeVISc0CY9UpNfgwRhLKTD5rarU0Db2BS58KpfRWHdXCHiANPn1aGLEhCUZE072YFY51Dyr2dQRrqaAPzyB125hYf67XS0u0JISHURsHe0I6P6Dk9wY5z3aH+EGalWzyQfgWRxgqI7Wgp1BcCWOx9xVHaJNFlDmtiOMQ4mGA1B8xBCwQ1Dgd0Tb01rBX/8T4B514AKowsbCbK2yYHoEe9z9s4zZEYFP61YO1DLenOktE0="
    }
  ]
}
