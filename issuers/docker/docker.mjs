export const metadata = {
  "issuer": "https://login.docker.com/",
  "authorization_endpoint": "https://login.docker.com/authorize",
  "token_endpoint": "https://login.docker.com/oauth/token",
  "device_authorization_endpoint": "https://login.docker.com/oauth/device/code",
  "userinfo_endpoint": "https://login.docker.com/userinfo",
  "mfa_challenge_endpoint": "https://login.docker.com/mfa/challenge",
  "jwks_uri": "https://login.docker.com/.well-known/jwks.json",
  "registration_endpoint": "https://login.docker.com/oidc/register",
  "revocation_endpoint": "https://login.docker.com/oauth/revoke",
  "scopes_supported": [
    "openid",
    "profile",
    "offline_access",
    "name",
    "given_name",
    "family_name",
    "nickname",
    "email",
    "email_verified",
    "picture",
    "created_at",
    "identities",
    "phone",
    "address"
  ],
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "code token",
    "code id_token",
    "token id_token",
    "code token id_token"
  ],
  "code_challenge_methods_supported": [
    "S256",
    "plain"
  ],
  "response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "HS256",
    "RS256",
    "PS256"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post",
    "private_key_jwt"
  ],
  "claims_supported": [
    "aud",
    "auth_time",
    "created_at",
    "email",
    "email_verified",
    "exp",
    "family_name",
    "given_name",
    "iat",
    "identities",
    "iss",
    "name",
    "nickname",
    "phone_number",
    "picture",
    "sub"
  ],
  "request_uri_parameter_supported": false,
  "request_parameter_supported": false,
  "token_endpoint_auth_signing_alg_values_supported": [
    "RS256",
    "RS384",
    "PS256"
  ],
  "backchannel_logout_supported": true,
  "backchannel_logout_session_supported": true
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "n": "yFhC4AvnfbZp6D8R_0C0BKM9Orec657D8gVnKT4pYUOLl4Sz4jBm1CFDuzk7hF1a0tHIavM6uFVktQnYc1rzTR9xv1V8Uth1kjG0-4MFcNKq_Jr_xU122k_5ymOP_peZSmL97OfXOl5Y69JFoCotLYPe26FzjOEU-brgr3jM58xBkr3KCWAjfUYh_F9hnKBzAj3ZyTEcelapbOl7V0lLNMrlN85qB9wXRI6xIJMtvDnCi2PAKk94Q-Ssn6bnM_Y4nQGwHiFhGovp45fzGhsyOq-7-_NsbRVHoOL9CCjS_ii4g0y4iDu9bYIBDXTI-i9aazzR9nRTZCbQ_ca1G6Pp_Q",
      "e": "AQAB",
      "kid": "xXkpBt3rWs2G-ub9lpJgq",
      "x5t": "bMEp8D_p4eL1V6Q1KUV_TBS4Gqs",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIJcojDHgUAx6+bMA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGRvY2tlci1wcm9kLnVzLmF1dGgwLmNvbTAeFw0yMTEwMDUxODQ3MTNaFw0zNTA2MTQxODQ3MTNaMCMxITAfBgNVBAMTGGRvY2tlci1wcm9kLnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMhYQuAL5322aeg/Ef9AtASjPTq3nOuew/IFZyk+KWFDi5eEs+IwZtQhQ7s5O4RdWtLRyGrzOrhVZLUJ2HNa800fcb9VfFLYdZIxtPuDBXDSqvya/8VNdtpP+cpjj/6XmUpi/ezn1zpeWOvSRaAqLS2D3tuhc4zhFPm64K94zOfMQZK9yglgI31GIfxfYZygcwI92ckxHHpWqWzpe1dJSzTK5TfOagfcF0SOsSCTLbw5wotjwCpPeEPkrJ+m5zP2OJ0BsB4hYRqL6eOX8xobMjqvu/vzbG0VR6Di/Qgo0v4ouINMuIg7vW2CAQ10yPovWms80fZ0U2Qm0P3GtRuj6f0CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU2ZNIX62SC4RD6fLXVCfCbX8uO5owDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQA+LwdyUOYBzo3IgJmc06oS1sVozmEV+lX4Xqcu93iDTBKjqvUPgOyOGEmpev+oavjXNnnhFVgr0K+4PyUtgNj1Gr02de1VA0ue+MFZvZdn06J5+kmUVvMmJvxVhqRaaT3o4PY70P8q9/8tDJHJknHWmypoPaM712fvw8uJhvD2y/YioV0H0nvZTXzRJfE2iyfuXeSZ4j4frTjQ1wb++B7upw04iZHbnW7XiDPplyORR+v/0gfcjpta/UZxoyrxHY95Z5Csy/23bxGmZhtqq80rzbQDFBqMYQQBkpB+is4Pp4i/a7JanwQwVDkHyiqQ9S38k4MAvSKQPuYNZciUsVVF"
      ],
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "n": "sNij8pwcQs0qvBmJwS_fu-qBCB8bL_x0jPU6P_Jn6_SJ4FDuG8TDd1sUpXfqPt70Aqprjso5AZiLclMXl1xzj2gStSW9ZB5skxtocUpbDgmI-TuU38D2lWO0gw-csoaFJQi9rPvFyZHb12ooYwVxyiq-2wqv0wkKNH4MM1Mg67lxt-a9MHecHNTdLackBeMGtD4dDMSTw_GW74Bb_H03IEnJ3pJwpKGVxVQQDuVzFhNs3eCnlaswjZEWI5_s4OqDrJ5Uo9TtpTY-8Rb-E6dpYe9mFu9MzMJRmxhENuLHJRQx2nShXj80DL6hG7nt5HudcdVsY_2fS2mTnAQOYKrFbw",
      "e": "AQAB",
      "kid": "xepHGxNL0ePafsMQW_5yb",
      "x5t": "VdAFjJq9bJ-XTNhR0MZcS9J4g9A",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIJccPTcSRM8b0AMA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGRvY2tlci1wcm9kLnVzLmF1dGgwLmNvbTAeFw0yMTEwMDUxODQ3MTNaFw0zNTA2MTQxODQ3MTNaMCMxITAfBgNVBAMTGGRvY2tlci1wcm9kLnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALDYo/KcHELNKrwZicEv37vqgQgfGy/8dIz1Oj/yZ+v0ieBQ7hvEw3dbFKV36j7e9AKqa47KOQGYi3JTF5dcc49oErUlvWQebJMbaHFKWw4JiPk7lN/A9pVjtIMPnLKGhSUIvaz7xcmR29dqKGMFccoqvtsKr9MJCjR+DDNTIOu5cbfmvTB3nBzU3S2nJAXjBrQ+HQzEk8Pxlu+AW/x9NyBJyd6ScKShlcVUEA7lcxYTbN3gp5WrMI2RFiOf7ODqg6yeVKPU7aU2PvEW/hOnaWHvZhbvTMzCUZsYRDbixyUUMdp0oV4/NAy+oRu57eR7nXHVbGP9n0tpk5wEDmCqxW8CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUBgo+z70VtxTsh7FzR3tdRv6mnjcwDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQCFdIqu/0gCOV09EncVB/M24yA8LW3ZJfG3BxaTxSUbh7r1LjzU5aZtCzP1WK8x6hRPF3gUGQYiVaRIWFTEgB92dcnAlCTKLT0O3nucxT6ECrCMZD3FF9DcFpmLMKjUWfDz1nRFYLyOE+NcEyCKudNSMNtvVuZ/zwO++Nvq7A0EDZ7PMAfrEzf22fgCDhYZv9hTCiAKmASBIV9eI9BQ+Nol9MccoZfvIp3IDlImn4vwdSUsBGJvbDvJhn1Fv/obFdYnMjh5UhZDLe1SjsUnHoOgRDgy/eMS72fgpXPiZG+shoWaeYkKewm5X3fQZ7p6XXydyCNRCPljG8lfboFeAsNB"
      ],
      "alg": "RS256"
    }
  ]
}
