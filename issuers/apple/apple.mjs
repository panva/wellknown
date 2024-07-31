export const metadata = {
  "issuer": "https://appleid.apple.com",
  "authorization_endpoint": "https://appleid.apple.com/auth/authorize",
  "token_endpoint": "https://appleid.apple.com/auth/token",
  "revocation_endpoint": "https://appleid.apple.com/auth/revoke",
  "jwks_uri": "https://appleid.apple.com/auth/keys",
  "response_types_supported": [
    "code"
  ],
  "response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "scopes_supported": [
    "openid",
    "email",
    "name"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post"
  ],
  "claims_supported": [
    "aud",
    "email",
    "email_verified",
    "exp",
    "iat",
    "is_private_email",
    "iss",
    "nonce",
    "nonce_supported",
    "real_user_status",
    "sub",
    "transfer_sub"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "kid": "FftONTxoEg",
      "use": "sig",
      "alg": "RS256",
      "n": "wio-SFzFvKKQ9vl5ctaYSi09o8k3Uh7r6Ht2eJv-hSaZ6A6xTXVIBVSm0KvPxaJlpjYPTCcl2sdEyXlD2Uh1khUKU7r9ON3rpN8pFHAere5ig_JGVEShxmt5E_jzMymYnSfkoSW44ulevQeUwP_MiC5VC1KJjTfD73ghX0tQ0-_RjTJJ2cLyFC4VFNboBMCVioUrz8IA3c0KIOl507qswQvMsh2vBTMDDSJfippAGLzUiWXxUlid-vyOC8GCtag61taSorxCw14irk-tsh7hWjDDkSTFn2gChPMfXXj10_lCv0UG29TVUVCAsay4pszzgmc4zwhgSsqQRd939BJexw",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "kid": "T8tIJ1zSrO",
      "use": "sig",
      "alg": "RS256",
      "n": "teUbLrwScsjVrcFAvSrfben3eQaEca3ESBegGh_wdGuLKw6QgwDxY3fC1_WeSVnkJXx72ddw3j2inoADnTyzuNa_PwDSmvJhOhmzOmoltmtKHteGdaXrqMohO6A85WxVKbN7pzDqwZJNrdY12LOltlI8PHIG-elAbKM2XOHiJaZnLpAVckKy6MQYsEExpPB3plGxWZElqwNZY6SUDVeN-o9qg5FJOFg7T7iTVVEagws4DM6uZNMDQGtqg9V9VqPQkUzC-sYd5eqbB9LqH4iN5F6OB7BmD3g3jCu9zgh3O9V24N43EruBCNrmP0xLP5ZliKqozoAcd1nv71HuVm6mgQ",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "kid": "pggnQeNCOU",
      "use": "sig",
      "alg": "RS256",
      "n": "xyWY7ydqTVHRzft5fPZmTuD9Ahk7-_2_IekZGy07Ovhj5IhYyVU8Hq5j0_c9m9tSdJTRdKmNjMURpY4ZJ_9rd3EOQ_WnYHM2cZIQ5y3f_WxeElnv_f2fKDruA-ERaQ6duov-3NAXC3oTWdXuRGRLbbfOVCahTjvnAA8YBRUe3llW7ZvTG14g-fAEQVlMYDxxCsbjtBJiUzKxbH-8KvhIhP9AJtiLDfiK1yzVJ7Qn6HNm5AUsFQKOAgTqxDMJkhi7pyntTyxhpkLYTEndaPRXth_LM3hVmaoFb3P3TsPCbDjSEbKy1wAndfPSzUk6qjyyBYhdXH0sgVpKMBAdggylLQ",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "kid": "pyaRQpAbnY",
      "use": "sig",
      "alg": "RS256",
      "n": "qHiwOpizi6xHG8FIOSWH4l0P1CjLIC7aBFkhbk7BrD4s9KQAs5Sj5xAtOwlZMyP2XFcqRtZBLIMM7vw_CNERtRrhc68se5hQE_vsrHy7ugcQU6ogJS6s54zqO-zTUfaa3mABM6iR-EfgSpvz33WTQZAPtwAyxaSLknHyDzWjHEZ44WqaQBdcMAvgsWMYG5dBfnV-3Or3V2r1vdbinRE5NomE2nsKDbnJ3yo3u-x9TizKazS1JV3umt71xDqbruZLybIrimrzg_i9OSIzT2o5ZWz8zdYkKHZ4cvRPh-DDt8kV7chzR2tenPF2c5WXuK-FumOrjT7WW6uwSvhnhwNZuw",
      "e": "AQAB"
    }
  ]
}
