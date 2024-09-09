export const metadata = {
  "issuer": "https://accounts.spotify.com",
  "authorization_endpoint": "https://accounts.spotify.com/oauth2/v2/auth",
  "token_endpoint": "https://accounts.spotify.com/api/token",
  "userinfo_endpoint": "https://accounts.spotify.com/oidc/userinfo/v1",
  "revocation_endpoint": "https://accounts.spotify.com/oauth2/revoke/v1",
  "scopes_supported": [
    "email",
    "openid",
    "profile"
  ],
  "jwks_uri": "https://accounts.spotify.com/oidc/certs/v1",
  "response_types_supported": [
    "code",
    "none"
  ],
  "response_modes_supported": [
    "query"
  ],
  "code_challenge_methods_supported": [
    "S256"
  ],
  "grant_types_supported": [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
    "urn:ietf:params:oauth:grant-type:jwt-bearer"
  ],
  "acr_values_supported": [
    "urn:spotify:sso:acr:legacy",
    "urn:spotify:sso:acr:bronze:v1",
    "urn:spotify:sso:acr:silver:v1",
    "urn:spotify:sso:acr:artist:2fa"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "claims_supported": [
    "aud",
    "email",
    "email_verified",
    "exp",
    "iat",
    "iss",
    "name",
    "picture",
    "preferred_username",
    "sub"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "ui_locales_supported": [
    "af-ZA",
    "am-ET",
    "ar",
    "az-AZ",
    "bg-BG",
    "bn-IN",
    "bp",
    "cs",
    "da-DK",
    "de",
    "el",
    "en",
    "es",
    "es-ES",
    "et-EE",
    "fa-IR",
    "fi",
    "tl",
    "fr",
    "fr-CA",
    "gu-IN",
    "he-IL",
    "hi-IN",
    "hr-HR",
    "hu",
    "id",
    "is-IS",
    "it",
    "ja",
    "kn-IN",
    "ko",
    "lv-LV",
    "lt-LT",
    "ml-IN",
    "mr-IN",
    "ms",
    "nb-NO",
    "ne-NP",
    "nl",
    "or-IN",
    "pa-IN",
    "pa-PK",
    "pl",
    "pt-BR",
    "pt-PT",
    "ro-RO",
    "ru",
    "sk-SK",
    "sl-SI",
    "sr-RS",
    "sv",
    "sw",
    "ta-IN",
    "te-IN",
    "th-TH",
    "tr",
    "uk-UA",
    "ur",
    "vi-VN",
    "zh-CN",
    "zh-TW",
    "zu-ZA"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1725865350",
      "alg": "RS256",
      "n": "mwxgRLwGohRveJ6GC_BcoCz-G8WwARd4DVlXdYf5woHQ6bpQkZqKropJbQ1FaGrWXj2O26rhhjgwdYE9BQU6emChBq9EW_ZYsWLOL2aBjWF8k0V7u-Ezm9gcz5jSWuqtyJVXO4VbFTqptvt6MrFqslrGfyXXE73D8IyKV1dZmzqDzgfo0JcevKN8bs87N9vpfSBUvK9PxMdQ9HKjC5UriXPPVBJG5qXfmWF3osZgzrokFt4RLrhCJWUxSGeEVMv7gGh7pHoymQUNComxkqadA2yHeuMbnUC5F6Xi6hSXa-feLi_l5jL_B8L3xAZW0jMSXDciAoV1OvMuD-o3qjQBaw"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1725260510",
      "alg": "RS256",
      "n": "kzWZuRv26agUPqloxGptejh0jzxWmcgbWOhVcBGaT7hSgkFomDlktXvk8G6m7_rO9fP07xyeftRywPbzoG__KM2CLyl4f8gFwW7k-XeiCcZcF7L3nIx3dXWd1XeEShHPz9q58c-RxjHFgz3_9w8KmaO3ZBM_iog76TaF11MLK_d87Yaem6TSiUJUgZDUZBdGlv3szvSm-ypRhHGZ4wb_XQUcp386xfN7i9VlBTS4JjBI_aQ1mOYRS8iG3H-4Y10EheJL05vXTHRdzTnhP72B8m5lopU55nVxLpdqy2g_T7biEZ-WzB97IqTkMIowBGAPnkHS1Gt-EhClHbuktkygBQ"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "sig-1724655715",
      "alg": "RS256",
      "n": "yXc59tOFN0_NGrDsmjdiZ66LYcxeJwQHndWpoU11cW8jSKb1aL0Gyi-sj_z5epGua-cRRkG8GczlzW9IxGbN3vyaCTvMx_ZiyKpSg9qyRQji611rQ6AmuvxdlBeGRayeGbCk4B_MWMxi-0SskaNbh4JAXopWZPkiZTOTjvqT3-teS5w-nIRP9AWXjsl-Qa0F7sLZ4GK4NLFUIQyIa_t0Wss7PSZZs3ta4aLiB6HW0QTFcGkgVwE5tH4aMMQ8_sUtbs-mDxqZ8_J_WztythoZXQtCJCbPG1AIAW58Oc6HwohqbzEakpzEzD4YGyYxbNU2LYsN4OaPV2WSJzlpdsapkw"
    }
  ]
}
