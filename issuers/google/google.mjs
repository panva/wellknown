export const metadata = {
  "issuer": "https://accounts.google.com",
  "authorization_endpoint": "https://accounts.google.com/o/oauth2/v2/auth",
  "device_authorization_endpoint": "https://oauth2.googleapis.com/device/code",
  "token_endpoint": "https://oauth2.googleapis.com/token",
  "userinfo_endpoint": "https://openidconnect.googleapis.com/v1/userinfo",
  "revocation_endpoint": "https://oauth2.googleapis.com/revoke",
  "jwks_uri": "https://www.googleapis.com/oauth2/v3/certs",
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "code token",
    "code id_token",
    "token id_token",
    "code token id_token",
    "none"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "scopes_supported": [
    "openid",
    "email",
    "profile"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "client_secret_basic"
  ],
  "claims_supported": [
    "aud",
    "email",
    "email_verified",
    "exp",
    "family_name",
    "given_name",
    "iat",
    "iss",
    "name",
    "picture",
    "sub"
  ],
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
    "urn:ietf:params:oauth:grant-type:jwt-bearer"
  ]
}

export const jwks = {
  "keys": [
    {
      "alg": "RS256",
      "use": "sig",
      "kty": "RSA",
      "e": "AQAB",
      "n": "tMXbmw7xEDVLLkAJdxpI-6pGywn0x9fHbD_mfgtFGZEs1LDjhDAJq6c-SoODeWQstjpetTgNqVCKOuU6zGyFPNtkDjhJqDW6THy06uJ8I85crILo3h-6NPclZ3bK9OzN5bIbzjbSvxrIM7ORZOlWzByOn5qGsMvI3aDrZ0lXNC1eCDWJpoJznG1fWcHYxbUy_CHDC3Cd26jX19aRALEEQU-y-wi9pv86qxEmrYMLsVN3__eWNNPkzxgf0eSOWFDv5_19YK7irYztqiwin6abxr9RHj3Qs21hpJ9A-YfsfmNkxmifgDeiTnXpZY8yfVTCJTtkgT7sjdU1lvhsMa4Z0w",
      "kid": "73e25f9789119c7875d58087a78ac23f5ef2eda3"
    },
    {
      "n": "61OnOdcc2R2bvcEq3w0G52O8RS2QxwSbLk2AIL_0m0uUk8K6IOvNF8NVPUxlICk8mhS5LOxyR4HrqIlPnpyVW7pmewXTluzOFbJ3ZB0c_vU90i2Uf-WV5OEFa46Wf1rUPCT3ogaEZFV-HoqUek8VRcb4fITrABFa9QGykC4mrbqqumNlgSnWZl813QioHmEHknVFU7h-sbJ7xBxpDiD-om29_2LI16jdQDFIgiC9aLC24Nym1rbYp1YkLWKwAOrcxQvnSD7xeDw_eBaW4Ms9Yx8T8AEyxxPgexJCP2tj53CjNJVrW9tWULnmdd2_wd1zPDjeXe6EZZmHa1ZEmv6AKQ",
      "kid": "c88d809f4db943df53da7accfd47764d05ba391f",
      "e": "AQAB",
      "alg": "RS256",
      "kty": "RSA",
      "use": "sig"
    }
  ]
}
