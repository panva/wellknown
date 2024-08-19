export const metadata = {
  "issuer": "https://login.klarna.com",
  "authorization_endpoint": "https://login.klarna.com/eu/lp/idp/oauth2/auth",
  "token_endpoint": "https://login.klarna.com/eu/lp/idp/oauth2/token",
  "jwks_uri": "https://login.klarna.com/eu/lp/idp/.well-known/jwks.json",
  "subject_types_supported": [
    "public",
    "pairwise"
  ],
  "response_types_supported": [
    "code",
    "code id_token",
    "id_token",
    "token id_token",
    "token",
    "token id_token code"
  ],
  "claims_supported": [
    "sub",
    "email",
    "email_verified",
    "phone",
    "phone_verified",
    "given_name",
    "family_name",
    "date_of_birth",
    "country",
    "billing_address",
    "locale",
    "national_identification_number",
    "national_identification_number_country"
  ],
  "grant_types_supported": [
    "authorization_code",
    "implicit",
    "client_credentials",
    "refresh_token"
  ],
  "response_modes_supported": [
    "query",
    "fragment"
  ],
  "userinfo_endpoint": "https://login.klarna.com/eu/lp/idp/userinfo",
  "scopes_supported": [
    "offline_access",
    "offline",
    "openid",
    "profile",
    "email",
    "phone",
    "billing_address",
    "national_identification_number",
    "create_payment_session",
    "profile:name",
    "profile:date_of_birth",
    "profile:locale",
    "profile:email",
    "profile:phone",
    "profile:billing_address",
    "profile:national_id",
    "profile:gender",
    "personalization:interests",
    "payment:request:create",
    "payment:recurring",
    "payment:authorization:list",
    "customer:login",
    "payment:customer_present",
    "payment:customer_not_present"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "client_secret_basic",
    "private_key_jwt",
    "none"
  ],
  "userinfo_signing_alg_values_supported": [
    "none",
    "RS256"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "id_token_signed_response_alg": [
    "RS256"
  ],
  "userinfo_signed_response_alg": [
    "RS256"
  ],
  "request_parameter_supported": true,
  "request_uri_parameter_supported": true,
  "require_request_uri_registration": true,
  "claims_parameter_supported": false,
  "revocation_endpoint": "https://login.klarna.com/oauth2/revoke",
  "backchannel_logout_supported": true,
  "backchannel_logout_session_supported": true,
  "frontchannel_logout_supported": true,
  "frontchannel_logout_session_supported": true,
  "end_session_endpoint": "https://login.klarna.com/oauth2/sessions/logout",
  "request_object_signing_alg_values_supported": [
    "none",
    "RS256",
    "ES256"
  ],
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ]
}

export const jwks = {
  "keys": [
    {
      "use": "sig",
      "kty": "RSA",
      "kid": "public:6e1a40f9-bfd0-49b6-8a1e-a030720faee0",
      "alg": "RS256",
      "n": "yWljyvs8tZl0PQoaqdJRPG26Sj-CT4_S_2tVlfvpaIRiY4RAnGtGm82Ow31AR-ylM7W7PNiSnu_QEqdT2Jm3CHaYTOVqndlUDY063yuGS3KkxOLyz9FBtADkTH77akYdq8q-JdhWlNzZaooXn18bqVlTOVUp9CnoUtQBKOQZ-G4hRwNG6lq2-65zNjbJh6-jU916QPhNCCl8ANgLZTiG5uItdLTIuRA6_GBLJGiwIfGU6KujP2r1nJOctZRIKwhsef6nm5u07UU61iSPQLSGbFcybnjGD17LmfQRJ3DVvugn3Vgy9dIIUPcJJNjYWyDCycf1rdiG3xXH0-PB8ykChm8S8vh5ICBXfprgNsPHxFzWlG_hWL2pqIU-Es4armHSDZ7V-xvKyjxjFgfLdXR4kacTAKSTUrnzF1-G9OUWTLGnQlhlnwK8tnKj8UKB7byNVBurMaJQtxYFojUSBIpLUSE-TQUkeqmpUb5qwLBue3m33dN5J4Z03Q-AlJBSUf-r9CWb9R9QE45dus4Ib7zizWm9-g0kKwG707Hp7vIIulxetmdO_Y5_LifiD4Lfwq_SAcImczuHUbGiQKpCoBuE1BNxD8OmZS9TtZuFAsua37fELHqTJVLLT1I7kF1TS28sIe4ctHE6zugTIx8irwCBAx-PdPlf1l4rWvbgdptXE78",
      "e": "AQAB"
    },
    {
      "use": "sig",
      "kty": "RSA",
      "kid": "private:6e1a40f9-bfd0-49b6-8a1e-a030720faee0",
      "alg": "RS256",
      "n": "yWljyvs8tZl0PQoaqdJRPG26Sj-CT4_S_2tVlfvpaIRiY4RAnGtGm82Ow31AR-ylM7W7PNiSnu_QEqdT2Jm3CHaYTOVqndlUDY063yuGS3KkxOLyz9FBtADkTH77akYdq8q-JdhWlNzZaooXn18bqVlTOVUp9CnoUtQBKOQZ-G4hRwNG6lq2-65zNjbJh6-jU916QPhNCCl8ANgLZTiG5uItdLTIuRA6_GBLJGiwIfGU6KujP2r1nJOctZRIKwhsef6nm5u07UU61iSPQLSGbFcybnjGD17LmfQRJ3DVvugn3Vgy9dIIUPcJJNjYWyDCycf1rdiG3xXH0-PB8ykChm8S8vh5ICBXfprgNsPHxFzWlG_hWL2pqIU-Es4armHSDZ7V-xvKyjxjFgfLdXR4kacTAKSTUrnzF1-G9OUWTLGnQlhlnwK8tnKj8UKB7byNVBurMaJQtxYFojUSBIpLUSE-TQUkeqmpUb5qwLBue3m33dN5J4Z03Q-AlJBSUf-r9CWb9R9QE45dus4Ib7zizWm9-g0kKwG707Hp7vIIulxetmdO_Y5_LifiD4Lfwq_SAcImczuHUbGiQKpCoBuE1BNxD8OmZS9TtZuFAsua37fELHqTJVLLT1I7kF1TS28sIe4ctHE6zugTIx8irwCBAx-PdPlf1l4rWvbgdptXE78",
      "e": "AQAB"
    },
    {
      "use": "sig",
      "kty": "RSA",
      "kid": "public:f16cd8f9-837f-4247-b83b-85f081f49a03",
      "alg": "RS256",
      "n": "s3AYxTheI3cx_ETSuRcY77_1xsipR7HGylPk7WKrpS8uYeU8diWExVFV6ZMyCxJMsdMWc2HC2vcFud4g44tqw0G6KL4bkqFRR9uU4sYIA2bd2w__s8-wGSUpJUU6iTEwWV9-VEMO5vGtSNlUmp4h2emsPXVSMp13qRu71S_Gy-okLn-tgMHwKGQCOjOJWz5DBubXKNI3HE8pwfQza_4yE-IBiPT0KZxEFmbsKhOSiQ0qi_MN2TmvCmkvQCGFDq6nj3Eo-1wAHE0kpRHDS_bIW2HKmf_3Dm7G7sUjquMHbSDdJstNjogalRfJOHTEY5PEdmoHcsQziZVr5VmHFLBcRwmUrK5HhiSeBwe_VCl-II7teBVLETxQRm4e6v-qTNUZ4w8X5_p_ZE_2zn_EvLIO5VB6JjyRLk-U4W_CyKjBlgGPi62ZZGNHkYUw-z107kaoW6NY4SQKWw43ufNvtIBBBxBgD3DPQaJr5H_OSyNHzslFNLvnSUlE-jXSm_M5EBruy0fA3_ZG4KNjw2LfyjlzgdgUZeFVPtJAet2qoniT-QsZgAz7oeoCS4deZZBjn8itFKbZCUPgbdpCVD3WaMjcIbLHYQZH41oSGHqf0UCQNqAJBIMHC7RTMD01GmHIr2nPqVqhG3YOBSdvS2nQvhG1PiH-hXT8tXx9NpyaMia4kzE",
      "e": "AQAB"
    },
    {
      "use": "sig",
      "kty": "RSA",
      "kid": "private:f16cd8f9-837f-4247-b83b-85f081f49a03",
      "alg": "RS256",
      "n": "s3AYxTheI3cx_ETSuRcY77_1xsipR7HGylPk7WKrpS8uYeU8diWExVFV6ZMyCxJMsdMWc2HC2vcFud4g44tqw0G6KL4bkqFRR9uU4sYIA2bd2w__s8-wGSUpJUU6iTEwWV9-VEMO5vGtSNlUmp4h2emsPXVSMp13qRu71S_Gy-okLn-tgMHwKGQCOjOJWz5DBubXKNI3HE8pwfQza_4yE-IBiPT0KZxEFmbsKhOSiQ0qi_MN2TmvCmkvQCGFDq6nj3Eo-1wAHE0kpRHDS_bIW2HKmf_3Dm7G7sUjquMHbSDdJstNjogalRfJOHTEY5PEdmoHcsQziZVr5VmHFLBcRwmUrK5HhiSeBwe_VCl-II7teBVLETxQRm4e6v-qTNUZ4w8X5_p_ZE_2zn_EvLIO5VB6JjyRLk-U4W_CyKjBlgGPi62ZZGNHkYUw-z107kaoW6NY4SQKWw43ufNvtIBBBxBgD3DPQaJr5H_OSyNHzslFNLvnSUlE-jXSm_M5EBruy0fA3_ZG4KNjw2LfyjlzgdgUZeFVPtJAet2qoniT-QsZgAz7oeoCS4deZZBjn8itFKbZCUPgbdpCVD3WaMjcIbLHYQZH41oSGHqf0UCQNqAJBIMHC7RTMD01GmHIr2nPqVqhG3YOBSdvS2nQvhG1PiH-hXT8tXx9NpyaMia4kzE",
      "e": "AQAB"
    }
  ]
}
