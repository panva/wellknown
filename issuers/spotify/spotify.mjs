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
      "kid": "sig-1726470102",
      "alg": "RS256",
      "n": "iR4XU0GhqNQiv5HFL_Aa52sBOGuZMlMeLPVil2SJC8vvVBS2F_GoWKGFV35jcRYXgnIs5pD2PEeVOqfTcy1bf8jHBISc_NVAJHTTHO6tdwgLshmIedO-xvIfpOP2A1UmoUjCCbviWilKH7RNkVYvfrf5YGgT3ImaCpKzukOo1AcMjM9RDg1slvZhNFaR4N7c1MMwM9SJ377Iblq9SykQL6w1E20OfEv-2KuS3rdhSIceURGUo1Zo9H40Xm116Ies0rejzTVqMU5Qe6fRmMgqlUAYNi_8Nu_5xjC4fD8Z89dyB2j3f9mXH_4zW3c1-AqlDxtAXsWWW1TkppJPyg1ZXQ"
    },
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
    }
  ]
}
