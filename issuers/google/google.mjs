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
      "n": "1rT4OUZfqfra6qUP07ZInRj7GsobWmDcmEu5K4HdYJoqCw_lxejxqRyUNtbnJXiKoJwFbnl_KHwTHA04v3Vkqh-zy03Yk8Ft4uGi7PYs1niZU6ZbpW3V8QqY1TMFVLRJgartw0Pjg7hIWoyv5QnQkuVjVZZ-MhnuQRxKghizCVl6IZWV4vemm5_llbtuN0ex4DmgA1GI8wrjdtWOoff1ybl_AwBwQlyQ9XmWru_Ea3MWHhii7sepWLk21wu_7iyUHw0VUBL8E-eM4ZeCfkTUt6ZpTw45aPIgIJC0m-cpscK2lmC-DG_irif14NtyrxfwF-cwSOLhzQVg1diPeWPH1Q",
      "kid": "b2f80c634600ed13072101a8b4220443433db282",
      "alg": "RS256",
      "e": "AQAB",
      "kty": "RSA",
      "use": "sig"
    },
    {
      "e": "AQAB",
      "kid": "d7b939771a7800c413f90051012d975981916d71",
      "alg": "RS256",
      "n": "wNHgGSG5B5xOEQNFPW2p_6ZxZbfPoAU5VceBUuNwQWLop0ohW0vpoZLU1tAsq_S9s5iwy27rJw4EZAOGBR9oTRq1Y6Li5pDVJfmzyRNtmWCWndR-bPqhs_dkJU7MbGwcvfLsN9FSHESFrS9sfGtUX-lZfLoGux23TKdYV9EE-H-NDASxrVFUk2GWc3rL6UEMWrMnOqV9-tghybDU3fcRdNTDuXUr9qDYmhmNegYjYu4REGjqeSyIG1tuQxYpOBH-tohtcfGY-oRTS09kgsSS9Q5BRM4qqCkGP28WhlSf4ui0-norS0gKMMI1P_ZAGEsLn9p2TlYMpewvIuhjJs1thw",
      "use": "sig",
      "kty": "RSA"
    },
    {
      "n": "pi22xDdK2fz5gclIbDIGghLDYiRO56eW2GUcboeVlhbAuhuT5mlEYIevkxdPOg5n6qICePZiQSxkwcYMIZyLkZhSJ2d2M6Szx2gDtnAmee6o_tWdroKu0DjqwG8pZU693oLaIjLku3IK20lTs6-2TeH-pUYMjEqiFMhn-hb7wnvH_FuPTjgz9i0rEdw_Hf3Wk6CMypaUHi31y6twrMWq1jEbdQNl50EwH-RQmQ9bs3Wm9V9t-2-_Jzg3AT0Ny4zEDU7WXgN2DevM8_FVje4IgztNy29XUkeUctHsr-431_Iu23JIy6U4Kxn36X3RlVUKEkOMpkDD3kd81JPW4Ger_w",
      "kty": "RSA",
      "use": "sig",
      "e": "AQAB",
      "alg": "RS256",
      "kid": "b2620d5e7f132b52afe8875cdf3776c064249d04"
    }
  ]
}
