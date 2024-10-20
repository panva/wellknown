export const metadata = {
  "issuer": "https://identity.lego.com",
  "jwks_uri": "https://identity.lego.com/.well-known/openid-configuration/jwks",
  "authorization_endpoint": "https://identity.lego.com/connect/authorize",
  "token_endpoint": "https://identity.lego.com/connect/token",
  "userinfo_endpoint": "https://identity.lego.com/connect/userinfo",
  "end_session_endpoint": "https://identity.lego.com/connect/endsession",
  "check_session_iframe": "https://identity.lego.com/connect/checksession",
  "revocation_endpoint": "https://identity.lego.com/connect/revocation",
  "introspection_endpoint": "https://identity.lego.com/connect/introspect",
  "device_authorization_endpoint": "https://identity.lego.com/connect/deviceauthorization",
  "pushed_authorization_request_endpoint": "https://identity.lego.com/connect/par",
  "require_pushed_authorization_requests": false,
  "frontchannel_logout_supported": true,
  "frontchannel_logout_session_supported": true,
  "backchannel_logout_supported": true,
  "backchannel_logout_session_supported": true,
  "scopes_supported": [
    "openid",
    "profile",
    "testapi.read",
    "dob",
    "email",
    "permission-status",
    "gender",
    "basic-profile",
    "user-security-audit",
    "upgrade-user",
    "edit-user",
    "update-user-tos",
    "offline_access"
  ],
  "claims_supported": [
    "sub",
    "nickname",
    "isadult",
    "age",
    "country",
    "isnpc",
    "email_verified",
    "p_friending",
    "p_commenting",
    "p_competition",
    "p_pushnotifications",
    "p_uploadmedia",
    "p_personalexp",
    "is_upgradable",
    "family_name",
    "given_name",
    "dob",
    "email",
    "p_commenting_status",
    "p_competition_status",
    "p_friending_status",
    "p_uploadmedia_status",
    "p_personalexp_status",
    "p_pushnotifications_status",
    "p_commenting_changed",
    "p_competition_changed",
    "p_friending_changed",
    "p_uploadmedia_changed",
    "p_personalexp_changed",
    "p_pushnotifications_changed",
    "gender"
  ],
  "grant_types_supported": [
    "authorization_code",
    "client_credentials",
    "refresh_token",
    "implicit",
    "urn:ietf:params:oauth:grant-type:device_code"
  ],
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "id_token token",
    "code id_token",
    "code token",
    "code id_token token"
  ],
  "response_modes_supported": [
    "form_post",
    "query",
    "fragment"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "subject_types_supported": [
    "public"
  ],
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "request_parameter_supported": true,
  "request_object_signing_alg_values_supported": [
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512",
    "HS256",
    "HS384",
    "HS512"
  ],
  "prompt_values_supported": [
    "none",
    "login",
    "consent",
    "select_account"
  ],
  "authorization_response_iss_parameter_supported": true,
  "dpop_signing_alg_values_supported": [
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512"
  ],
  "ui_locales_supported": [
    "cs-CZ",
    "da-DK",
    "de-DE",
    "el-GR",
    "en-AU",
    "en-GB",
    "en-IN",
    "en-MY",
    "en-NZ",
    "en-SG",
    "en-US",
    "pt-PT",
    "en-CA",
    "es-AR",
    "es-ES",
    "es-MX",
    "es-US",
    "et-EE",
    "fi-FI",
    "fr-BE",
    "fr-CA",
    "fr-FR",
    "hu-HU",
    "id-ID",
    "it-IT",
    "ja-JP",
    "ko-KR",
    "lt-LT",
    "lv-LV",
    "nb-NO",
    "nl-BE",
    "nl-NL",
    "pl-PL",
    "pt-BR",
    "ro-RO",
    "ru-RU",
    "sk-SK",
    "sl-SI",
    "sv-SE",
    "tr-TR",
    "uk-UA",
    "zh-CN",
    "zh-HK",
    "zh-TW",
    "en-IE"
  ],
  "acr_values_supported": [
    "flow:register",
    "flow:registerchild",
    "flow:upgrade",
    "flow:autoregister",
    "ott:<puid>:<token>"
  ],
  "one_time_token_endpoint": "https://identity.lego.com/api/v1/OneTimeToken/issue"
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "335D17AE50BC1D9A475EABD9BC81CF24",
      "x5t": "cnJpscPx_-cZBUerdmuFVn9raSk",
      "e": "AQAB",
      "n": "0TMkCKr_lReoMsQTCKIJG4y8ETaOmuaYtAc_uGBbi7bDavNJEy8rc1CF0PZggDtEKsMj7W8JATvPX4Bv7GtbO4fBfqNYTXIga6BYHpXV2Cm43zFh1d7kkhzEDIYqix8HIMB1S62UxUGcXjkUVRVxCczqblDb5PjFuomF5S1W92-LcJXrBFJSx-PjKs3OHG2Oe10luH3tS1elFVBvJXXIfkFJw1GVAUlBbmSBhR6X1r1itVa0o7wVktPXKGTthej3bSp3pSXvSoyRcBUyceL9BvmD5Jh7CyUZ7sGaXBI5OjZu3PeXZuDDvaj66aSB_bLb_aj5PdTetJnkl6uz2JsK0Q",
      "x5c": [
        "MIIC7zCCAdegAwIBAgIJAIyXkE4h0rIJMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNVBAMTGWh0dHBzOi8vaWRlbnRpdHkubGVnby5jb20wHhcNMjQwODA2MDkwMjQxWhcNMjUwMzA0MDkwMjQxWjAkMSIwIAYDVQQDExlodHRwczovL2lkZW50aXR5LmxlZ28uY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0TMkCKr/lReoMsQTCKIJG4y8ETaOmuaYtAc/uGBbi7bDavNJEy8rc1CF0PZggDtEKsMj7W8JATvPX4Bv7GtbO4fBfqNYTXIga6BYHpXV2Cm43zFh1d7kkhzEDIYqix8HIMB1S62UxUGcXjkUVRVxCczqblDb5PjFuomF5S1W92+LcJXrBFJSx+PjKs3OHG2Oe10luH3tS1elFVBvJXXIfkFJw1GVAUlBbmSBhR6X1r1itVa0o7wVktPXKGTthej3bSp3pSXvSoyRcBUyceL9BvmD5Jh7CyUZ7sGaXBI5OjZu3PeXZuDDvaj66aSB/bLb/aj5PdTetJnkl6uz2JsK0QIDAQABoyQwIjALBgNVHQ8EBAMCB4AwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDQYJKoZIhvcNAQELBQADggEBACMjCK0hjpzpLftyzN2dWg3lngiRvHT4HqeFFlK67bR/laC6d1A+5BQ3C440BKriSgVQ0o+NkeuNg3dVreR5CJIKKvQZERdOKDHKkRSZ9Sx7DJI6MaSZCrngIUeXad+blcXkJ5BBZPQCPXGUx6+Z0nat40aajgTfcQsSLlPtQ6r9I4hfsNDlTwBjJTrKal50kbFvMG+/JZP6pYShlOrqj1N4k5IpXmOj9xpzlS5ZQ+5ed5srZu6pSc+ctHdvMkTJiLs3Wj955J7HY8Ghxn5nr7JN2mSds1M12eskaUWxZqMxvrVcUQ0g8FGL8rIqBkKqcr56EIAboDih6w6bMJ+qIkc="
      ],
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "5A922F0E0DD5D9B3CE1F8934A073E6FB",
      "x5t": "Y5a2AiMNCAzlmteQx4VS_kySMbM",
      "e": "AQAB",
      "n": "mvObs__RFOUTVIKPCXqVQChWRouWSA5G611TRpcqER6Xssw8ABGfFsTE148593Yq_oRhhUOUXmT4WTtuyPRzSclyEk-MMacIWTR1felv_6wgwKEPeBYkixkG0Ei8PXEvd3nqznSEJmdIVzw6BA02xc4kigkbDAiGgwoPuNzreeRvDM-RT4xeVSSF1rZtjUSAcgxuRPB4K0PZGzfbBIkgiXz0SQXJFOr7RuUXILgtA_fhCpSUm0AxI2dT_-IbIA8am38kBUWWFFt96nxQqMtKZrdHMwPCxxQ5f6Up-n9wkKa-H1V0y9-svXN1vEzzhop1UnXHsLZldhE0ARE6EhGghw",
      "x5c": [
        "MIIC7jCCAdagAwIBAgIIYgfYRxpx29owDQYJKoZIhvcNAQELBQAwJDEiMCAGA1UEAxMZaHR0cHM6Ly9pZGVudGl0eS5sZWdvLmNvbTAeFw0yNDA4MDYwOTAyNDFaFw0yNTAzMDQwOTAyNDFaMCQxIjAgBgNVBAMTGWh0dHBzOi8vaWRlbnRpdHkubGVnby5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCa85uz/9EU5RNUgo8JepVAKFZGi5ZIDkbrXVNGlyoRHpeyzDwAEZ8WxMTXjzn3dir+hGGFQ5ReZPhZO27I9HNJyXIST4wxpwhZNHV96W//rCDAoQ94FiSLGQbQSLw9cS93eerOdIQmZ0hXPDoEDTbFziSKCRsMCIaDCg+43Ot55G8Mz5FPjF5VJIXWtm2NRIByDG5E8HgrQ9kbN9sEiSCJfPRJBckU6vtG5RcguC0D9+EKlJSbQDEjZ1P/4hsgDxqbfyQFRZYUW33qfFCoy0pmt0czA8LHFDl/pSn6f3CQpr4fVXTL36y9c3W8TPOGinVSdcewtmV2ETQBEToSEaCHAgMBAAGjJDAiMAsGA1UdDwQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATANBgkqhkiG9w0BAQsFAAOCAQEAOT0P8FAg6ozlwVKRZjiyJm1aigVZzPzg22orzS6ppFRlVA+P3AcdxuVplMOVfTMtQ3594OnXYFsKGS5+9kGP4RmHCA2ihUP80mZRYPFzM86QxpO0071MBcIy1YwyhHEY6wHhjma0A0HTKZzYZGZ+phwIW02ToEjAyhjkyypvbPh29X+qU63l7vqEHtZ5X38om/F8kmKyLbjsqqYXhJ3E/jNcE6AtgWZ5qUUipxUm7IZzm62AZoxRIQhCBRPUnC8e/xlMww7+EX3DIFlOtO3f7o/dmeHHp5KfOqw0GCfXq6vH0oK0u+AQ5KRBzMIm9OdGUj7B4rfUWGWXZnMmElSrQA=="
      ],
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "60EC871F9A61201D57A8FAB29ADD752B",
      "x5t": "lK8y_jdKPrC2BMRDWEWPVq5Cg-8",
      "e": "AQAB",
      "n": "oudqIB0kUt9ZzQqdPr3xd7Frut-Vy2VjWaHLHaflbiiUVa6aU1Q6O5d8V4vj-SHYKcj-_DyV636nzmzq2e3e8OHxJpQiMhu62SojdVKzRriUALxKj8mPo-0xt8pRjpYTMN9ZruZCvn7Kb3t1Ksf9X8SQGg1YgOZ3wsfweSV7O4vPY98nWU-Dosr02a_OCLn6YrabZkSsWI05rT69JSBJ824AAGuzbmXqIYIUtTGWnvPmlyRQjIIENT5z6A_IM6N0r9P2PgeW0UY4P_Xjx-ihs4dlJsCSwIRcvTYI1bFtqnOA5_4yUYT5a6IhBp1kTOZEwQe_iXBTCh0oKCyPxTb_MQ",
      "x5c": [
        "MIIC7jCCAdagAwIBAgIIVpH6avab/SowDQYJKoZIhvcNAQELBQAwJDEiMCAGA1UEAxMZaHR0cHM6Ly9pZGVudGl0eS5sZWdvLmNvbTAeFw0yNDA1MTAwOTAyNDFaFw0yNDEyMDYwOTAyNDFaMCQxIjAgBgNVBAMTGWh0dHBzOi8vaWRlbnRpdHkubGVnby5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCi52ogHSRS31nNCp0+vfF3sWu635XLZWNZocsdp+VuKJRVrppTVDo7l3xXi+P5IdgpyP78PJXrfqfObOrZ7d7w4fEmlCIyG7rZKiN1UrNGuJQAvEqPyY+j7TG3ylGOlhMw31mu5kK+fspve3Uqx/1fxJAaDViA5nfCx/B5JXs7i89j3ydZT4OiyvTZr84IufpitptmRKxYjTmtPr0lIEnzbgAAa7NuZeohghS1MZae8+aXJFCMggQ1PnPoD8gzo3Sv0/Y+B5bRRjg/9ePH6KGzh2UmwJLAhFy9NgjVsW2qc4Dn/jJRhPlroiEGnWRM5kTBB7+JcFMKHSgoLI/FNv8xAgMBAAGjJDAiMAsGA1UdDwQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATANBgkqhkiG9w0BAQsFAAOCAQEAPl9h1AwynfeKktz5RDZJjmmouKTQRxhlMUUq25A8qWgGlnsnbNhnJP4KLlqgLs/iTmqo6NC/gqzLrSSWqu/faQS6O49sQBIdHy9y07S/9EmIY55tc4E9FjO5WEtjpAZAPIyT1kLLxrCZVoa+Hafo+w5sPer1yBKjztuml4vs09KxIRGwMmdeqpKC7Hf4gD6eNkR71f203mt4ZM0/usAshovhtMlXu/xga/I01F/aOe+HSSODArOcysIc4YnpNypfliL0fsOyxRjU+qKlkGO4MPNiyNhZ1CpZY+YtkrhEeVEwYbyf6Wjxs1BpxjaAWzIkuVdAblQVGfvrWwwbc9IF1g=="
      ],
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "813178116189FAD3CC0F2CF629574FF6",
      "x5t": "tsGzisEaVd0hKxOTWYcjfquE5jQ",
      "e": "AQAB",
      "n": "uFYOSkgwX0cW61FJXJ0n_7nmEVDNqYTRiCxI9vMkW-LWYQr7znSSdEtRClYFMscESnyDwzCqdqGFmI0xMvPgnP3llF2nlXOtQqQIP_250-NhyturqYAp-tAFndFRx1etBOOnPWYR4ALODjXl8YQFHqr1WcOjyK16qbpyJB9fpXlOPT6SKYDeOXuKLcTnv1lTjzvmymAwtFEp8R7nTu069rIHx6ZklpUQpeA4PrgFmGAayVqRP7_F2VLD7yYcfa2xodHakrSiw-Y3FihEXfG4KPnw0oirN7TBeeFDv1nfpRH0kpRRCDneGA48MswGdpV4fsJyuqapISa0N6uCAMleZw",
      "x5c": [
        "MIIC7jCCAdagAwIBAgIIIi84x2KRvBQwDQYJKoZIhvcNAQELBQAwJDEiMCAGA1UEAxMZaHR0cHM6Ly9pZGVudGl0eS5sZWdvLmNvbTAeFw0yNDA1MTAwOTAyNDFaFw0yNDEyMDYwOTAyNDFaMCQxIjAgBgNVBAMTGWh0dHBzOi8vaWRlbnRpdHkubGVnby5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC4Vg5KSDBfRxbrUUlcnSf/ueYRUM2phNGILEj28yRb4tZhCvvOdJJ0S1EKVgUyxwRKfIPDMKp2oYWYjTEy8+Cc/eWUXaeVc61CpAg//bnT42HK26upgCn60AWd0VHHV60E46c9ZhHgAs4ONeXxhAUeqvVZw6PIrXqpunIkH1+leU49PpIpgN45e4otxOe/WVOPO+bKYDC0USnxHudO7Tr2sgfHpmSWlRCl4Dg+uAWYYBrJWpE/v8XZUsPvJhx9rbGh0dqStKLD5jcWKERd8bgo+fDSiKs3tMF54UO/Wd+lEfSSlFEIOd4YDjwyzAZ2lXh+wnK6pqkhJrQ3q4IAyV5nAgMBAAGjJDAiMAsGA1UdDwQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATANBgkqhkiG9w0BAQsFAAOCAQEAf0nryhn7uCRf+INYG0OFG4ETbCJhMxpYPAjmkjL7egPrweyneLkq3V7nt2nBXG4tnMB59s6zKySpxhwcTDt3S70RL5TFIc01NdWK2b34+TW8AppC1Sa1r9palyPxptX+YZ+J+uDXp4s/pK0gDBRcirDEpy/u0KajeJd18WDhADo+oAZm3rVOPg+UFgG92maysRuw/ZC9LHl77l9Mn2N3Nq29AX5QEJsWo5qpUy/vZRIEFy5IQ/86pF5PCQSzm+me92ysv0X+VsNX2g8sz0+NtAWoE3+wZk9NIVEOxBIBBIyQ8jjKmS3wAeNdYbwdjapKAnrZw6LSUE02oLMOI8QkIw=="
      ],
      "alg": "RS256"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "BB0078E103E4753A9D0F778C85D03D34",
      "x5t": "RIjo6hJ_oJLFr6-wb6tjRR-wlT8",
      "e": "AQAB",
      "n": "ukWd3AYg-50sZW04sLLoNnuWXLOJWKnLMwSIZOqYPxszP59H9Br8oyHGmc25Dcvx99a0EaCsmz3IfAIw90f2W6dh6gsQna7WtmJWY7yVQ7GCpN5Pe6eaNoDTlbi8BiRLFUrsKQ18Mak7QAPMLIpjPL8Rfi-ktEIoJEFU-nIP8jKjzsGi3b7CGHNOEji_wEBu86Om4NGMAlSxWdhmaJ597Qcw1XfsJ_hVuvCdyUG1BmDyRCcWG0P1JVGEdLJHoO1d0yoO7cVbsfed_mpV6agAGzLMp3TLKsoQQKadT4fkymCq5wnhHW9S9qEOnGCfCmomL4d61wYy6l3H8kyxncHnAw",
      "x5c": [
        "MIIC7zCCAdegAwIBAgIJANiQozdqoFuTMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNVBAMTGWh0dHBzOi8vaWRlbnRpdHkubGVnby5jb20wHhcNMjQwODA2MDkwMjQxWhcNMjUwMzA0MDkwMjQxWjAkMSIwIAYDVQQDExlodHRwczovL2lkZW50aXR5LmxlZ28uY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAukWd3AYg+50sZW04sLLoNnuWXLOJWKnLMwSIZOqYPxszP59H9Br8oyHGmc25Dcvx99a0EaCsmz3IfAIw90f2W6dh6gsQna7WtmJWY7yVQ7GCpN5Pe6eaNoDTlbi8BiRLFUrsKQ18Mak7QAPMLIpjPL8Rfi+ktEIoJEFU+nIP8jKjzsGi3b7CGHNOEji/wEBu86Om4NGMAlSxWdhmaJ597Qcw1XfsJ/hVuvCdyUG1BmDyRCcWG0P1JVGEdLJHoO1d0yoO7cVbsfed/mpV6agAGzLMp3TLKsoQQKadT4fkymCq5wnhHW9S9qEOnGCfCmomL4d61wYy6l3H8kyxncHnAwIDAQABoyQwIjALBgNVHQ8EBAMCB4AwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDQYJKoZIhvcNAQELBQADggEBAJM94yenWx9TKnSLQSQ6/+PEzVOcqCz/domQreML2QUrqnHCzxtlYUV1W8uy5v+eGXPd8YlKdPrJM2IWloPL4sj46ggpPxmY1jg9lr3c+8QZ5Yl+JwlUZxNi8Cx5fJaaZSBoYHf426+mipa+90DBSLUz8oWEIK83QtQ0Ewjc+qJ7OegsLBTzsz9EIoh5WhJbG52QALPUv0AClY+xHPJEVKzFrX5OgK1R+bpTw//ixYi0j/3F9LMHhJ5luTipHVmDf+xXPS1LGreijtsXtIKXBSGXMTKDU7Tc+J8H4R3glDAYRbz3mWK4aMFLs84jxI1wlEIsFJegQEtiFpdWYAMzYKY="
      ],
      "alg": "RS256"
    }
  ]
}
