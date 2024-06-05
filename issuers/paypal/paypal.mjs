export const metadata = {
  "issuer": "https://www.paypal.com",
  "authorization_endpoint": "https://www.paypal.com/signin/authorize",
  "registration_endpoint": "https://api.paypal.com/v1/oauth2/applications",
  "token_endpoint": "https://api.paypal.com/v1/oauth2/token",
  "userinfo_endpoint": "https://api.paypal.com/v1/oauth2/token/userinfo",
  "jwks_uri": "https://api.paypal.com/v1/oauth2/certs",
  "revocation_endpoint": "https://api.paypal.com/v1/oauth2/revoke",
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic"
  ],
  "response_types_supported": [
    "code",
    "code id_token"
  ],
  "response_modes_supported": [
    "query"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "scopes_supported": [
    "email",
    "address",
    "phone",
    "openid",
    "profile",
    "https://uri.paypal.com/services/wallet/sendmoney",
    "https://uri.paypal.com/services/payments/futurepayments",
    "https://uri.paypal.com/services/expresscheckout"
  ],
  "id_token_signing_alg_values_supported": [
    "HS256",
    "RS256"
  ],
  "claims_supported": [
    "aud",
    "iss",
    "iat",
    "exp",
    "auth_time",
    "nonce",
    "sessionIndex",
    "user_id"
  ],
  "code_challenge_methods_supported": [
    "RS256",
    "ES256",
    "S256"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "kid": "16e6c7334cf754186f877ff1f4a0bc128e1c97ca",
      "n": "ALk6-zOoZqVpGNvuEcJWBzDsPdwGwxl8M-c2acIMFkqPPdP9IJt0W3KUd5fHdyl1v_pO05kzQPGkKfgTrAL6X0dD2_48xzkkLN2ieiemc-DcfN971XX5Z0ITprPM1BiofYx_h_pJMiydHLQSJ485oyt0ZHPGysHa8w00x7D1OtqMToxfiwFsxcCyBlcPMOs7aijVWz7NGZxpgTb8OJZmOzVF0oVIhjek0oqXIQzQRlivBLhU4yYPnGdQ1g0Lcj5lkry5sZrNVijqn2E3yHDgiBSk-mKhLhCNwj3pQ4EfP42Kv_o-Gg-l2FRqQ1M0DJMcZiYv_vCteJY-HLpClS-BeF8",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "alg": "RS256",
      "e": "AQAB",
      "use": "sig",
      "kid": "53ef2b2d6d6f79b1a15aa95fd2f083307ca01809",
      "n": "nO5SrT_qxJod_CnTSfDcT1JQdKSScsHkGcgs5vLgi19-kSgG8ZYyK6Tw1hG_kdKLuNOCKtXB6H9vhBRAoPqDZGBfmLKcYB2aTGQvOHhQRJwCI5I3slaZR04WARuChxMCJfD8u3xSJpfQbJZTBA-6eSeGUHBYMHAn0sj8oVWtd16kuwvkN3rz8wu4qPgTf5Vi7pGJIahFTtnmyvQVg0XAxkY3yRgKS4sMV40vyCUc0Ezur44-wH6SPZbCu56RrVlbyr1vdrt5VJQsVptk6YuxZlU3quCtlnz7c6JBqbjiMQioR27BtRCMTnE4ipbBY6q7BskSYhzkOXCaCWRVbQE3Ew"
    },
    {
      "kty": "RSA",
      "alg": "RS256",
      "e": "AQAB",
      "use": "sig",
      "kid": "7239c69c8d054c1f8cfbb11f287e8702",
      "n": "AIwkEwDK_pYOBzlQmN9UqnV9KVzZv5ICzYSvv5rCrzIxi83f6Y-xzyb9IUAkMZoDNcJJXGLQzSoqA_-5oaoo-192u4q7--zU2uE27Aa3sdX8luiwusI8fra0rGzB_MjozLf_xkZrMbPP0CspXsEWkz9Z1sIaH28yjFecoyIf7Hiw0JIVQJYbpp-a94E-KFv0GF_4yOCo6Pt3Kpcpr5NErBnPAK8P9oEY6ttvvzkJQBZMVVqUZO1RORUzgnLdCeHESc9qkkddAItRgUjsjThz6FbusfsWxiJQEPp1wW-y8Ccbx4PuZoAu0iz-TqkDfWxzavUpRPEcY-oW5VSyDmHq-_M"
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "PhZg_0E9fCp41a11ytXqoU0_kwTVC_iDBnVjis5EYXc",
      "y": "7CknEyKupLJ6jkOI9GbSkY-EAkZh0G2kIxC0e2hycTM",
      "kid": "f16b4522a7c8ad2358df9a57a500851114d2e7d2",
      "acr": [
        "idp",
        "server",
        "native",
        "user"
      ]
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "eOYVhDk9ptB8WjP_IlCtQv3SPglH-RPgT_yO4mdjApY",
      "y": "4GCfgsfOMZnKgeJVxgghJkAltLBpVedxKwzc1niJuls",
      "kid": "8bc45f1b83c642bca8de0d943a348a80",
      "acr": [
        "idp",
        "server",
        "native",
        "user"
      ]
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "g9JCShMJJ2ZJ44-xDqizdxZd-djtmb_HTnI6ckkxo0w",
      "y": "L3BLOdn_DUveu6N0Vi9M7rofoBfRPQ5UOcA4DCEaiBA",
      "kid": "3cec3e5e7f129111f1aa509f7cb69d6daf816c6c",
      "acr": [
        "client"
      ]
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "VJH1IPzjA8G81ZwzI5M_qW2lsD5F8DtuDBvXBL-DfDA",
      "y": "J9D3IGo8tF_UHWGJ-N3Go4eAwsWLg3z4g_TkqsT9I8o",
      "kid": "b8609fda7e964c9eaf9ca054facd5558",
      "acr": [
        "client"
      ]
    },
    {
      "kty": "OKP",
      "crv": "X25519",
      "x": "IA0SO6bFK5u0O1ij3b0yXbAMEqJkaSZiDu6qxoEOnHY=",
      "kid": "753778214125442a472d4b6150645367"
    },
    {
      "kty": "RSA",
      "alg": "PS256",
      "use": "sig",
      "kid": "10aba280c5c211ec9d640242ac120002",
      "n": "AJVShCNXgM2bJzRTa9qMnv-34-k78pG7PdLsniaf6M8sH3SCRXcYvrsgLy6EHCcdEyRiG4_-U2pNY_tva64P03YoL85dsS59u4edUeEEQmwZL7r8qSQBfO14VnBfsKARpqFSn9cC_3wF2RS0z79fFrf9zxaXUEGt_LIgBlot1yMwBXXVZ7t4kD33G8DqP-3On287uWVXysoF9ZYrzuJ2thE19PhM3j0ovhyC32tR6TQh2Uo8QIYEykF4T00fiMYuyfavPlk-dwoAyWdrUY97-B_43nF_KolEA9gatipiBTSvdIKnA6M0--L_AbGhwP0RKlUXe3fm9sJde27xrWlGU_k",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "kid": "0p8fuebzyxcoikyfytc3rkp5zzsefd6nceplqjfe",
      "n": "AMI4nT637KP8GW8ptjK4dz1qDg-Jvnrg1-oYl3mWWJcl0otmF7xLySLEiWLPhAQB7x4Pui3s4SJmhV44wfGolWSsG9d1UQk3weIAnPZmBawUz6Q9PipMMIcP1_AyJ4n5eOOCXUDVflyQzPyikIStZlBvy5LUO-XwONEE66EYdIJyiosr1wn2qBLuWnrvMDeHLtVzMQjiTgNi0Lf3m_5sYa5kE3Yiyzy0r6zI4G6O9R-FQID29mUNPBy2fGsvS9ffat8u87rb96-SW_kLIKltIdI_yvTxkG4C9RyM6igCpwk_VhatCkX_iF5AkU8sEIphvEjjds19FpIeVoDaEnEQJDU",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "alg": "PS256",
      "use": "sig",
      "kid": "zd5v2oifghewbxgpfsxavzl4jqxyxtc2wyi8qu0x",
      "n": "kl3M-moMDxc6fN11Rs57unybqcohsnCaH1jTftBmnXCXRtyyxEGxCJU5ZSSZYRQtJi-TCk9SvgbkTEAH_pJQLtw7dajkCtRQ0JUFNvdYdxPVE-yMA6CTkPnPyfK610lgzf7Nm7hyHaVRbcnvparVaPXIDmrW0-UctCqmrM-TNvz5m2SrC4HHAfRJa0VKsw7wcobk8jKnf3yZKJApa-Ha27vToDDMrESj8WW42HPhGizMX3Yo3qdkfoQCbWBlRwB8BLylSnzyMtO8OqdDGwpOEmcwt9EnY54vuXQ424Abk6SD0Vr7H8PLL1mii2Db3jToWBp6QCL_6ANAFsS2CBp51Q",
      "e": "AQAB"
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "A2BPlX577dis3_MKXFko3k27Y72QBoBPnv0dyisDe8A",
      "y": "ipQ7m7-dNB_r12GJNCJ-vw36I0fvslZdbjaXcuAU40g",
      "kid": "qbo9erwnz9aytisgmlyvwznt74xnpk5mfpc3vjlu"
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "5nJ4LzuAJkg7ezkDPGyuKvZv8pCSoaG7aUJq3V9gHUs",
      "y": "D8XKG0jvKA_MV2tvAyS1nGimCdyxm_ZScfUfSO3xgk0",
      "kid": "b9cf476b8eee47fb8f476b8eee67fba0",
      "acr": [
        "client"
      ]
    },
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "azr6sgzi2o8G1VtrN01v2uPFZeuNUGDVjqGoNTloyS4",
      "y": "cd_1iTia46bbBdRrNAT3ZLCKI7PmugYqA-Z5CoHdAHA",
      "kid": "4e17cf9dd7c0498985a9b26620e5924c",
      "acr": [
        "client"
      ]
    },
    {
      "kty": "RSA",
      "alg": "PS256",
      "use": "sig",
      "kid": "2225541d274045a6b174bafe62e9eafd",
      "n": "ANjsqgPqg84Js5s3fnBgu2OTUWXhqfrebchGrcHsA9SsXgeE18cUC5daluMcSqPKd3HSdDKfJwHITA1vP1IpP9O_OGNofHw6Lgt2uSkrNB3B_B3xa5_QCYCWx8Q6yoDvy6T5S_1FjrMChyrhBRL-2j2aYTe7Eu0P4CcxOfnwBtyyS6uKZ55_Y9BJnBooyZwi9fqE-41qV6eY3qeq05ze8pnTxzGV-4ZvxYyGB3QLOdoHGnn1a4yGwT0wg2v0UQCfp_-m20ho2HHBvHNu_UaqDYNmKM6fLRnXPmjE4liNntPmXIh9hi9a6AFtN-6YWRCMo-uhLx5KC89ioLKM1h0ALwE",
      "e": "AQAB"
    }
  ]
}
