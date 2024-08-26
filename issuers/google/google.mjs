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
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "e": "AQAB",
      "n": "v7hTj49pNGYjxKbgMx_iDyjeErhfJFepMl306IV_TW5T_CEGE4lWFfBe9w0cwpi5KD6XlC1GO1AsrtzcYF29wJ283GNBZRkbl8iTe-LQYdjQsBtf_1fLIVt6LR7H2U1RPqa3pY16Kq6i6yC2osVg6tD7ApBCGw1WKe8uU3cm28biJzuV4gv6PzcbOdErd-hb4Cv6n2SoMPYlBfT4pWee75poQh8DYoQ1KJwowz3U1MaxOBMP260hmDK-QK0q4LYabCQiBNsz4FWWcaAAFxZFbiqGY5Gdu18uOkpMbdAN5FoZ_6nMDMSTmlf0CHv7gZe_cL38kZvTaynkWwDxqsW_Xw",
      "kid": "a49391bf52b58c1d560255c2f2a04e59e22a7b65"
    },
    {
      "e": "AQAB",
      "kty": "RSA",
      "use": "sig",
      "n": "1rT4OUZfqfra6qUP07ZInRj7GsobWmDcmEu5K4HdYJoqCw_lxejxqRyUNtbnJXiKoJwFbnl_KHwTHA04v3Vkqh-zy03Yk8Ft4uGi7PYs1niZU6ZbpW3V8QqY1TMFVLRJgartw0Pjg7hIWoyv5QnQkuVjVZZ-MhnuQRxKghizCVl6IZWV4vemm5_llbtuN0ex4DmgA1GI8wrjdtWOoff1ybl_AwBwQlyQ9XmWru_Ea3MWHhii7sepWLk21wu_7iyUHw0VUBL8E-eM4ZeCfkTUt6ZpTw45aPIgIJC0m-cpscK2lmC-DG_irif14NtyrxfwF-cwSOLhzQVg1diPeWPH1Q",
      "alg": "RS256",
      "kid": "b2f80c634600ed13072101a8b4220443433db282"
    }
  ]
}
