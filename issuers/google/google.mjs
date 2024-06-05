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
      "kid": "6719678351a5faedc2e70274bbea62da2a8c4a12",
      "e": "AQAB",
      "alg": "RS256",
      "kty": "RSA",
      "n": "oAP5OnSzKfkEV2QMm2XCuu4G8VGRBOyhKg-4H04WzYzPqM_Tmqi60Vod96JTo7SfM0OoGeNnlkWNjjBWkSS66alNLrvTNLi0A-KGeBsZiIFmrbsP6HHJfFzPd0Mci7-e11fNKecZgbC1me9PtRXFZb9JprZGFOvBiMwU0rRvh0GWYmTFj1HFjOIMAwTGOKOVGNuPjv0b3V0YaAkUNklzi4MM6qgzUb0tE0so1Ii7kBe7roMScS2USPeeJkeoPjLEbQcrT8MxOSxH-JgPLfq-zOnEJ6ERW3mtXdZCNzqmVLn5yjX5lKr5E2vgkPAHx9NLZ09fo_L9woeX_5epl6cIkQ",
      "use": "sig"
    },
    {
      "e": "AQAB",
      "alg": "RS256",
      "kty": "RSA",
      "kid": "674dbba8faee69acae1bc1be190453678f472803",
      "n": "w-l_VE4KNa22n4nsMwcabujowm924YoQQnwOz_dPYHmDI1O-r2bqw6mHmByXwii7aaeIMHJZWpmT5SkR3OYIu5RbSgiU-8JrQoplW_vZY2IqG1y5-frPC_9gnz_0qKKjtjqglCP-1AlfOdu7r5kOpkOACs5mWn4tm1K9R1EPjk2T_MMO7FkteZd8woh1fwUUuvbhPyDxBzx9EUsnGWbpTndOYc7W-EUk1jMtWBk3buLeaypVaOLWranK_XFrX-xx03BohrfinOqmftYgc0z94sxix7X1G36JZeh8-jpUhwyBPinBxOZOE_5kQn4CYM66Ygxwiws0ZJ-klG2qTi239w",
      "use": "sig"
    }
  ]
}
