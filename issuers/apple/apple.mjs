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
      "kid": "Bh6H7rHVmb",
      "use": "sig",
      "alg": "RS256",
      "n": "2HkIZ7xKMUYH_wtt2Gwq6jXKRl-Ng5vdwd-XcWn5RIW82-uxdmGJyTo3T6MPty-xWUeW7FCs9NlM4yu02GKgwep7TKfnOovP78sd3rESbZsvuN7zD_Vk6aZP7QfqblElUtiMQxh9bu-gZUeMZfa_ndX-P5C4yKtZvXGrSPLLjyAcSmSHNLZnWbZXjeIVsgXWHMr5fwVEAkftHq_4py82xgn2XEK0FK9HmWOCZ47Wcx9fWBnqSi9JTJTUX0lh-kI5TcYfv9UKX2oe3uyOn-A460E_L_4ximlM-lgi3otw26EZfAGY9FFgSZoACjhgw_z5NRbK9dycHRpeLY9GxIyiYw",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "kid": "lVHdOx8ltR",
      "use": "sig",
      "alg": "RS256",
      "n": "nXDu9MPf6dmVtFbDdAaal_0cO9ur2tqrrmCZaAe8TUWHU8AprhJG4DaQoCIa4UsOSCbCYOjPpPGGdE_p0XeP1ew55pBIquNhNtNNEMX0jNYAKcA9WAP1zGSkvH5m39GMFc4SsGiQ_8Szht9cayJX1SJALEgSyDOFLs-ekHnexqsr-KPtlYciwer5jaNcW3B7f9VNp1XCypQloQwSGVismPHwDJowPQ1xOWmhBLCK50NV38ZjobUDSBbCeLYecMtsdL5ZGv-iufddBh3RHszQiD2G-VXoGOs1yE33K4uAto2F2bHVcKOUy0__9qEsXZGf-B5ZOFucUkoN7T2iqu2E2Q",
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
