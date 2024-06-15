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
      "kid": "c3abe413b2268ae976458c82c15179547e97527e",
      "e": "AQAB",
      "n": "rr9RI_trqotRBIi9qTgoYPE4FnjvhIOoolHhi3Lxw3FqK-8vYwczsVEsTzVek3MAUdNNILhJozKN1Snirlrr_albKitJFJ1SbjJe2HsNeZu96TrWMNmWCCUOXK0ecEVdw8gqfGOE-_VvKaIVxYGaJpSystRjRXfrT8QHXNYMSI7xqJI9Obw4IUpwYxky6eVtB3zLW4Qz7cH2jFMsSB3uufdvOA-odJXrwZkC2FX0krVtSyCWzazjHMX0zOCckZVZK7xBNjuuElcnZ4IpGHcHDYtyI004WY-ez7_yxyOHGoJd31Omg39DkunpSQxfA87LLGumtd1OROvQzNFZETDqfw",
      "alg": "RS256",
      "use": "sig"
    },
    {
      "alg": "RS256",
      "kid": "3d580f0af7ace698a0cee7f230bca594dc6dbb55",
      "e": "AQAB",
      "kty": "RSA",
      "n": "rhgQZT3t9MgNBv9_4qE58CLCbDfEaRd9HgPd_Zmjg1TIYjHh1UgMPVeVekyU2JiuUZPbnlEbv8WUsxyNNQJfATvfMbXaUcrePSdW32zIaMOeTbn0VXZ3tqx5IyiP0IfJt-kT9MilGAkeJn8me7x5_uNGOpiPCWQaxFxTikVUtGO5AbGh2PTULzKjVjZWwQrPB1fqEe6Ar6Im-3RcZ-zOd3N2ThgQEzLLRe4RE6bSvBQUuxX9o_AkY0SCVZZB2VhjQYBN3EUFmKsD46rrneBn64Vduy3jWtBYXA1avDRCl0Y8yQEBOrtgikEz_hog4O4EKP5mAVSf8Iyfl_RMdxrOAQ",
      "use": "sig"
    },
    {
      "n": "w-l_VE4KNa22n4nsMwcabujowm924YoQQnwOz_dPYHmDI1O-r2bqw6mHmByXwii7aaeIMHJZWpmT5SkR3OYIu5RbSgiU-8JrQoplW_vZY2IqG1y5-frPC_9gnz_0qKKjtjqglCP-1AlfOdu7r5kOpkOACs5mWn4tm1K9R1EPjk2T_MMO7FkteZd8woh1fwUUuvbhPyDxBzx9EUsnGWbpTndOYc7W-EUk1jMtWBk3buLeaypVaOLWranK_XFrX-xx03BohrfinOqmftYgc0z94sxix7X1G36JZeh8-jpUhwyBPinBxOZOE_5kQn4CYM66Ygxwiws0ZJ-klG2qTi239w",
      "kid": "674dbba8faee69acae1bc1be190453678f472803",
      "alg": "RS256",
      "e": "AQAB",
      "kty": "RSA",
      "use": "sig"
    }
  ]
}
