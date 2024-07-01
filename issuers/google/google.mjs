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
      "use": "sig",
      "alg": "RS256",
      "kty": "RSA",
      "e": "AQAB",
      "n": "4bAT6C6EeX8Dspje3FrAXw-nnhNk04e1RmNa4kjc0CHf6Pk7ryARlwA-6YilyPABqQfYHx60s8oSnxvUVprFfQ2-Q8aAZO7bPKSxnoGlcKERL2oLNA4Msvc89N9Y5ycThZUplf_QC19e6jyYXN6Nz-UnJSCLrtQY8tVhhVRs61j4A2N_p-enAi-r704Qi1-v-DKV4eVRkClKViploo8NyjUaT9L4vbBssPCjyimJzsWnEe1fED5c4LnHeArYzA_FEn3JJotqDIz9t2VnvZNTMhizHEX4VnORlEWMEfR8n4CEHQx7PcQUOmfqyw08gWeXQl1-uTjtIGaE-sRIv9u_vQ",
      "kid": "2af90e87be140c20038898a6efa11283dab6031d"
    },
    {
      "alg": "RS256",
      "n": "nzGsrziOYrMVYMpvUZOwkKNiPWcOPTYRYlDSdRW4UpAHdWPbPlyqaaphYhoMB5DXrVxI3bdvm7DOlo-sHNnulmAFQa-7TsQMxrZCvVdAbyXGID9DZYEqf8mkCV1Ohv7WY5lDUqlybIk1OSHdK7-1et0QS8nn-5LojGg8FK4ssLf3mV1APpujl27D1bDhyRb1MGumXYElwlUms7F9p9OcSp5pTevXCLmXs9MJJk4o9E1zzPpQ9Ko0lH9l_UqFpA7vwQhnw0nbh73rXOX2TUDCUqL4ThKU5Z9Pd-eZCEOatKe0mJTpQ00XGACBME_6ojCdfNIJr84Y_IpGKvkAEksn9w",
      "kid": "87bbe0815b064e6d449cac999f0e50e72a3e4374",
      "e": "AQAB",
      "kty": "RSA",
      "use": "sig"
    },
    {
      "n": "rhgQZT3t9MgNBv9_4qE58CLCbDfEaRd9HgPd_Zmjg1TIYjHh1UgMPVeVekyU2JiuUZPbnlEbv8WUsxyNNQJfATvfMbXaUcrePSdW32zIaMOeTbn0VXZ3tqx5IyiP0IfJt-kT9MilGAkeJn8me7x5_uNGOpiPCWQaxFxTikVUtGO5AbGh2PTULzKjVjZWwQrPB1fqEe6Ar6Im-3RcZ-zOd3N2ThgQEzLLRe4RE6bSvBQUuxX9o_AkY0SCVZZB2VhjQYBN3EUFmKsD46rrneBn64Vduy3jWtBYXA1avDRCl0Y8yQEBOrtgikEz_hog4O4EKP5mAVSf8Iyfl_RMdxrOAQ",
      "kid": "3d580f0af7ace698a0cee7f230bca594dc6dbb55",
      "alg": "RS256",
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig"
    }
  ]
}
