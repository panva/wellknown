export const metadata = {
  "issuer": "https://discord.com",
  "authorization_endpoint": "https://discord.com/api/oauth2/authorize",
  "token_endpoint": "https://discord.com/api/oauth2/token",
  "jwks_uri": "https://discord.com/api/oauth2/keys",
  "response_types_supported": [
    "code",
    "token"
  ],
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "yQ5JCk8zI3K1iz8pL4Ul6GyGzlNbP00rQZaR7VdoEtU",
      "n": "5RX-LybarBqiIlmkyxDDgu_umpGCIRHUwa8uzaeh4aTJvwbjmpf9HOlDVgDNfzq8L6snS1_nTf3D4zNF8Ixn_ELs19n9lsmEySUH79_0Xr_v9hmTvmk1665rmNpwu2VcIhPIuf8k2gM3ytztyyjQ1W0rAxZ0ulCdG0XP0epJx_iEKp6A7pzHljDa2r5c_fykg41JOlxmiYH4TvLpFuMOcb8QH3IG7tLxyT-kxmXKBKDJuVBX-_yplSPqXJLZfRS6eqBwMb7hZ0UUVK7ka2YIIzpjzemUyyepN57NDPC4MYk-wg6IPP1_ro0wQkA-3rfAbg0ZsfxtlbWHHOYkF7LQNtlx_xK2c9dO_7-wW2LlwVupyBPQBoUIWeTY9MQu0vgsZssexrIXm9iGE_agqudYcSw0KuDNeLMWe3cCze778nqrrT1aKl1GccpB4epoumtwbo5xzyagXn9eZ0DKDHIl5ePAmnhHM2YTKw4aI-aRVa4i8xoSWd7SPiZcqajhGmWr9fUI6J56cD-k4bO3y0_CvckvPP88g4QUterBXfGOTOMm2_93bxAk_kx5ndNaR8ccsfVBYxj2PPGfec4eYjxo_y7m8O2J2859YokrAfkEUC1jJYrjDbbBGiOtXBR-usQIIHMcs5TP4fDVNFYoxRgQpYosgwjkeDJvUyZPcYYR9KU",
      "e": "AQAB",
      "alg": "RS256"
    }
  ]
}
