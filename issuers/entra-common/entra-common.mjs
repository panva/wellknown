export const metadata = {
  "token_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/token",
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "private_key_jwt",
    "client_secret_basic"
  ],
  "jwks_uri": "https://login.microsoftonline.com/common/discovery/v2.0/keys",
  "response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "response_types_supported": [
    "code",
    "id_token",
    "code id_token",
    "id_token token"
  ],
  "scopes_supported": [
    "openid",
    "profile",
    "email",
    "offline_access"
  ],
  "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0",
  "request_uri_parameter_supported": false,
  "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo",
  "authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
  "device_authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode",
  "http_logout_supported": true,
  "frontchannel_logout_supported": true,
  "end_session_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/logout",
  "claims_supported": [
    "sub",
    "iss",
    "cloud_instance_name",
    "cloud_instance_host_name",
    "cloud_graph_host_name",
    "msgraph_host",
    "aud",
    "exp",
    "iat",
    "auth_time",
    "acr",
    "nonce",
    "preferred_username",
    "name",
    "tid",
    "ver",
    "at_hash",
    "c_hash",
    "email"
  ],
  "kerberos_endpoint": "https://login.microsoftonline.com/common/kerberos",
  "tenant_region_scope": null,
  "cloud_instance_name": "microsoftonline.com",
  "cloud_graph_host_name": "graph.windows.net",
  "msgraph_host": "graph.microsoft.com",
  "rbac_url": "https://pas.windows.net"
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "23ntaxfH9Gk-8D_USzoAJgwjyt8",
      "x5t": "23ntaxfH9Gk-8D_USzoAJgwjyt8",
      "n": "hu2SJrLlDOUtU2s9T6-6OVGEPaba2zIT2_Jl50f4NGG-r-GyQdaOzTFASfAfMkMfMQMRnabqd-dp_Ooqha473bw6DMbM23nv2uhBn5Afp-S1W_d4NxEhfNlN1Tgjx3Sh6UblBSFCE4JGkugSkLi2SVouy43seskesQotXGVNv4iboFm4yO_twlMCG9EDwza32y6WZtV8i9gkQP42OfK0X1qy6EUz2DN7cpfZtmkNtsFJhFf9waOvNCR95LVCPGafeCOMAQEvu1VO3mrBSIg7Izu0CzvuaBQTwnGv29Ggxc3GO4gvb_OStkkmfIwchu3A8F6e0aJ4Ys8PFP7z7Z8lqQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAJB4tJM2GkZjMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQwNTIyMTg1ODQwWhcNMjkwNTIyMTg1ODQwWjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhu2SJrLlDOUtU2s9T6+6OVGEPaba2zIT2/Jl50f4NGG+r+GyQdaOzTFASfAfMkMfMQMRnabqd+dp/Ooqha473bw6DMbM23nv2uhBn5Afp+S1W/d4NxEhfNlN1Tgjx3Sh6UblBSFCE4JGkugSkLi2SVouy43seskesQotXGVNv4iboFm4yO/twlMCG9EDwza32y6WZtV8i9gkQP42OfK0X1qy6EUz2DN7cpfZtmkNtsFJhFf9waOvNCR95LVCPGafeCOMAQEvu1VO3mrBSIg7Izu0CzvuaBQTwnGv29Ggxc3GO4gvb/OStkkmfIwchu3A8F6e0aJ4Ys8PFP7z7Z8lqQIDAQABoyEwHzAdBgNVHQ4EFgQUeGPdsxkVp8lIRku0u41SCzqW7LIwDQYJKoZIhvcNAQELBQADggEBAHMJCPO473QQJtTXJ49OhZ48kVCiVgbut+xElHxvBWQrfJ4Zb6WAi2RudjwrpwchVBciwjIelp/3Ryp5rVL94D479Ta/C5BzWNm9LsZCw3rPrsIvUdx26GmfQomHyL18AJQyBj8jZ+pVvdprvbV7v586TcgY24pW018IiYGQEO/fR8DSO4eN8ekTvT8hODBoKiJ9NFy+BruqW1AbMDptH12uzpU/N9bftysnWeDJEVZd5Rj8u8F9MRbB6V7dzxdoswaKkiJbxt+JrZgdtHSFqz6rDypIkumYwUkyiwH4/GQGPiyBLFbRp1EYVa3SFwAEmhl4a7On05aHVnOfCoyj/qA="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "MGLqj98VNLoXaFfpJCBpgB4JaKs",
      "x5t": "MGLqj98VNLoXaFfpJCBpgB4JaKs",
      "n": "yfNcG8Ka_b4R7niLqdzlFvzRjrTdl2wTVEtqRWXqDhJAt_KIizVrqe0x3E1tNohmySHAMz3IS4llC41ML5YUDZVg33XR0RMc6UntOq-qCSOkPXdliC3QkwxspGAaJxVzhO5OZuQlMoQNL6_1FgdaR62gfayjLSJepB8M-o7yC8sOtRhatwe9kbO_5QJC54B8ni0ge5i9nANMln-9ZCHeRQYkgl0RSvR_KtfpWrEqAa4K2cyPaDqejOs8G8V0kM_8CLtDWi5diKpO_fvzRJwparEB5hfMdjAyJgdTOqCVUulZdL7tsoHzb8-_ufq-5QFJkyNUpYB9R1mVQwmRGdY0nQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAJtuCSyF4i1FMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQwNjA5MTkxNzM5WhcNMjkwNjA5MTkxNzM5WjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyfNcG8Ka/b4R7niLqdzlFvzRjrTdl2wTVEtqRWXqDhJAt/KIizVrqe0x3E1tNohmySHAMz3IS4llC41ML5YUDZVg33XR0RMc6UntOq+qCSOkPXdliC3QkwxspGAaJxVzhO5OZuQlMoQNL6/1FgdaR62gfayjLSJepB8M+o7yC8sOtRhatwe9kbO/5QJC54B8ni0ge5i9nANMln+9ZCHeRQYkgl0RSvR/KtfpWrEqAa4K2cyPaDqejOs8G8V0kM/8CLtDWi5diKpO/fvzRJwparEB5hfMdjAyJgdTOqCVUulZdL7tsoHzb8+/ufq+5QFJkyNUpYB9R1mVQwmRGdY0nQIDAQABoyEwHzAdBgNVHQ4EFgQUzF0gtMcVDEn4JoNlDOxvhM8IHBswDQYJKoZIhvcNAQELBQADggEBAJe2muR0H2h3phiZ/v6FD8Yio6niulN9jr7+eC/UJV1M7l5xdHgVL83JbNZjUECDrJ/m+ICY1NbEXfv4fo3sfpU1AwG5GXAhxTrS4zMhH7Hvir3800wCd3ByJ/2vQW1y3orlqR8Q65BN9ayub6BCBTNmtUAOpAWcnP3FnGtIDmAL4APcacK92ZTg8ayVX586U7DDWmI4l7X6xCruK0ic5W2b13k2cay0EalHNWHl+gikqQg6tTGSvM295P6Xy5bQ1I5QtHjVCbm0315T/FylvR8fZhVD+AUCc1DwtOr3Yhm3EXftDb6hP08C4yDhGIDH3Q3+xuWlIA7KQjgljuiT67U="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "inEVM76gXEQEonQ0PSQXBO_7HfU",
      "x5t": "inEVM76gXEQEonQ0PSQXBO_7HfU",
      "n": "q0sct8P8TxXmXX2QXzIhMnwZHdCO96SMFCMtfswF1TpxYqaIFObIhT_zxxpBTsvkYHAxG7CUQ6qVgd_TQhMx0TSZq_X3_0NG6cIRik0g-Woe0gT6tUJ-o6zdtO-6EvoOXovT3YMh8vN1Q5UJV6dudDqjnlTNHH1OxFcU4U6no1R6iILDMci_TGq7I2AJS5i_O9Ptp5NmgDT_kbwZHJz1Abbw4VuOPMFJ2Q1rN9odV9YHKjjowqa3BULVyTvP8FoGUzhoopu6O7oA-ehlO9fhEoSS0zNn0lWXQMZXUF7GSyui12121kIXyll2KlvuETQNdVkeXu0m95g_pnX-8iZ_cw",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIINBmSj+3xdxwwDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA2MTIxNjA3MjBaFw0yOTA2MTIxNjA3MjBaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCrSxy3w/xPFeZdfZBfMiEyfBkd0I73pIwUIy1+zAXVOnFipogU5siFP/PHGkFOy+RgcDEbsJRDqpWB39NCEzHRNJmr9ff/Q0bpwhGKTSD5ah7SBPq1Qn6jrN2077oS+g5ei9PdgyHy83VDlQlXp250OqOeVM0cfU7EVxThTqejVHqIgsMxyL9MarsjYAlLmL870+2nk2aANP+RvBkcnPUBtvDhW448wUnZDWs32h1X1gcqOOjCprcFQtXJO8/wWgZTOGiim7o7ugD56GU71+EShJLTM2fSVZdAxldQXsZLK6LXbXbWQhfKWXYqW+4RNA11WR5e7Sb3mD+mdf7yJn9zAgMBAAGjITAfMB0GA1UdDgQWBBSZbhe/r/sxfv0nYlyrwjx+b6W2RTANBgkqhkiG9w0BAQsFAAOCAQEAoWZ+C/snZySK1KiOsrn1iq7wrVzkuModPMZEshR3SuDIB6+C76fmP42I3UtDVIY5EeE79YjdwDwy86dPZjKVNbP7yUSbJC8uPM1TNMA9s8QpO6RZ63ZZ4i8hcgk6PXgi0PPjX2cmzUSNUa4gS8ibhf7JDu4aF9lUceBsNQghNQfz3tBs1ksJoW3WY5EfW6yMCv1Vim0uBlpnYdlynAd8O+9N2JR9wC+12PwPGrdGQDX3pos8bnmBxM55ueiGoqDH5yGI1h63POlGnpEdqOONT8N4cZNazQ1NswbBQuZMZSfbPXjiiFQ4bktyiXr421KbknQrkRYogi1F2Cjrd4SZJg=="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "EHu9neGZBCDyv2IYq8U5JiRMFng",
      "x5t": "EHu9neGZBCDyv2IYq8U5JiRMFng",
      "n": "w1kH9dFGdaJS8fvQulDssuuNhkczzy1Mo6IiNoC3ih3K-L_VF5TQmSkqXrovWCUlhBCfc1VPR9Cn2G4UP7Sygn0nTqXBY1NFQQZecqwGESJFIuonRqjdlDhNYXjSF_eg63KyuyLV8A-Sn05Ufuc8ax0tyrxPbkOql0pB2hmRhj94iDAFB2LBoxfEgxCG3VT0ascVYW6voTCChs2P65-4RLC-ib1w1FjuACDwsB7KZDxxaUGLfnIoLWUjmw1zCaDRiRvhxB4jQXpB64IFxaYsqxA_x8bj2JEE7qALZ2dZ3fPy9yYSAnRfaTMetgouR9x4SKy4HxUxsADMm_7p9LiRZQ",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJAO8yTjZIibNNMA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDA1MDYyMzA5MDJaFw0yOTA1MDYyMzA5MDJaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMNZB/XRRnWiUvH70LpQ7LLrjYZHM88tTKOiIjaAt4odyvi/1ReU0JkpKl66L1glJYQQn3NVT0fQp9huFD+0soJ9J06lwWNTRUEGXnKsBhEiRSLqJ0ao3ZQ4TWF40hf3oOtysrsi1fAPkp9OVH7nPGsdLcq8T25DqpdKQdoZkYY/eIgwBQdiwaMXxIMQht1U9GrHFWFur6EwgobNj+ufuESwvom9cNRY7gAg8LAeymQ8cWlBi35yKC1lI5sNcwmg0Ykb4cQeI0F6QeuCBcWmLKsQP8fG49iRBO6gC2dnWd3z8vcmEgJ0X2kzHrYKLkfceEisuB8VMbAAzJv+6fS4kWUCAwEAAaMhMB8wHQYDVR0OBBYEFJ4xtCt3JpPxlUVH7ATgJGM4ofg7MA0GCSqGSIb3DQEBCwUAA4IBAQB9WAEvE3VtO5wIOtN5N/QbIU63H5QPgMW3M9nOs43AhLgwvWupxaiATyMqtK53RPvcxYPe7QwSw/xH9McXii1bOBVmc71AcjlXYfuMJ/0IMEFEUQwZDEwj+vIlg07gWh0hleehyAgMblDUQRRN+b5J+soa9LBBAooY/48F/++y4DiTzKyoWn5cV4H2kdIFVyB43XzJRqDoK1ZhplVLTc1a3K1NL1/qP9rhvtx62YDzfNh4+FTJLu31ALcUbD+Qx2m0U9wuWq3EdUzEen5DeLvhx55YD7V1BASHNYBd8lGhHk97aTw53CMGAuTELvWO+4x7dFM9autw2KvSn76n/4Ql"
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "FB8_wii85nv_UW3qrldTvWwg-rE",
      "x5t": "FB8_wii85nv_UW3qrldTvWwg-rE",
      "n": "vusbA5UBNtCB0U2RmyQOCE-8fWl8bzCQXm3V5Nd7oockcyCpqXOWfhVNJD-Ifb5_zAmxRgHvRdfpA2btaqZiit5XaFYngtRK6mVxCcnOEgwxQGX9DLM5plXWtGTf_DF1FATBidFlM8KgicTS3MTyKZNrnTz0JD7ISxwV0TgSEiRrsm7eVsumuNYNW30Yb38DRDTei9U1YR0YDmdZyuf-OKTllxKH_BO-aj8Gkxcnkdriih2CINF6M6oASOHTJYO7P8CQE1DX2y2Zq7xxVvzm4IClk7WDdzuAoC-ZiKvDaU5plSyrnH3_VgjJrzXtuGN-HEd4Vg89h_2rE74cN5KRtQ",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJAJOO92n+BJBLMA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDA2MTAxODA3NDVaFw0yOTA2MTAxODA3NDVaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAL7rGwOVATbQgdFNkZskDghPvH1pfG8wkF5t1eTXe6KHJHMgqalzln4VTSQ/iH2+f8wJsUYB70XX6QNm7WqmYoreV2hWJ4LUSuplcQnJzhIMMUBl/QyzOaZV1rRk3/wxdRQEwYnRZTPCoInE0tzE8imTa5089CQ+yEscFdE4EhIka7Ju3lbLprjWDVt9GG9/A0Q03ovVNWEdGA5nWcrn/jik5ZcSh/wTvmo/BpMXJ5Ha4oodgiDRejOqAEjh0yWDuz/AkBNQ19stmau8cVb85uCApZO1g3c7gKAvmYirw2lOaZUsq5x9/1YIya817bhjfhxHeFYPPYf9qxO+HDeSkbUCAwEAAaMhMB8wHQYDVR0OBBYEFLBW6P0A+qHESOFg8Rgxqp38myYtMA0GCSqGSIb3DQEBCwUAA4IBAQAsZzkzk8w7RR3KCHOY+XLn3R2NanL/j+WILdOHnJn9Ot1VbG868MFQgwMp8Y2y7Kj5RekknY6EGcNuJi4rLgq5u1LSB/IoNPCs7l3MhRQqoedJX4sDNf4NfTVHK+4GNSQqP60eBoxClRexIbKcHJ0x57Ww/S9NNWtldBIfB7egoSj6UVcTHRLWZyPoZsOXHY4bYOf8ANNg21jT1KWwOXSWUx60v7tVxEXs8XAEUnmuMbuh3yAnjv3UoRdl7wcaQ5jq2/+vaAWZm0WlWN3CCY3y2mE0OZZg9HRCQu+o+58wt658sDIpP7PXGjyA5h23W9+i8QtyQ1PtqCXKj8zktivW"
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "ZZ8JkzXRCgYMWcMYdOn9sdDBeUA",
      "x5t": "ZZ8JkzXRCgYMWcMYdOn9sdDBeUA",
      "n": "iJd0N795eVyYQvWe417HOF_GHlRgOsPZRh1KwNHyWP_WKrjlOl8ftPAs-Sspv-s8v68TilHYkY9pjUdEkxBvBolJiPP6ntAKIKk_Fa4K7sutgQdyxKehhRnk4hAIc-mUM9ROrkyr4dIi-Au9T7aWaBSG5dCffXQBQ1DBVbIUMNOwr4ewQYeb49ujxzE6dPiCB-uDX2Z_hjy9M8wMrHS8e2vKDYqx3AJ3xyiDjIDB-wBEe-SF5bKVNSfExcsiL0KzV_iQkKQNALJrakX4Mw-hC3ssv7q3NQcza9kpyew0TKytSOcJcIheX9Cse22F-y1h873iOkYWiebNIu5TeTjVww",
      "e": "AQAB",
      "x5c": [
        "MIIC6TCCAdGgAwIBAgIIHxgoSKq7mWgwDQYJKoZIhvcNAQELBQAwIzEhMB8GA1UEAxMYbG9naW4ubWljcm9zb2Z0b25saW5lLnVzMB4XDTI0MDYxMDE4MjgyOFoXDTI5MDYxMDE4MjgyOFowIzEhMB8GA1UEAxMYbG9naW4ubWljcm9zb2Z0b25saW5lLnVzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiJd0N795eVyYQvWe417HOF/GHlRgOsPZRh1KwNHyWP/WKrjlOl8ftPAs+Sspv+s8v68TilHYkY9pjUdEkxBvBolJiPP6ntAKIKk/Fa4K7sutgQdyxKehhRnk4hAIc+mUM9ROrkyr4dIi+Au9T7aWaBSG5dCffXQBQ1DBVbIUMNOwr4ewQYeb49ujxzE6dPiCB+uDX2Z/hjy9M8wMrHS8e2vKDYqx3AJ3xyiDjIDB+wBEe+SF5bKVNSfExcsiL0KzV/iQkKQNALJrakX4Mw+hC3ssv7q3NQcza9kpyew0TKytSOcJcIheX9Cse22F+y1h873iOkYWiebNIu5TeTjVwwIDAQABoyEwHzAdBgNVHQ4EFgQUcLvbIYVCbexuF1KXcKysM8kS6EMwDQYJKoZIhvcNAQELBQADggEBAF95Wf/yAfmHksmL42JiCemjsHN0KlZ2NsGTj2+zbDXbttj8zm+ZA74bPlAWI5aFvKfxxpC3Chfi26+GhKVeVRA65KyokTulQzE+BWbqphQZoH6Iz07J3GB3uUthPQbedtj6SDD/zE4jcmhmrY8o0lU5zJhkp9T5f8644ZR6rJRIXpFbDwmbsFM5H4Nz7D5FG+A4uYumICoTaiQjJ+cu/k8sDM8ut6R2cGmwlRMIGzD8HzNeGuaRtXsFqCGAI+qRbW29hJoFNZxhQBeFRDdBvwbNIa/o6ZAzKq81E4SdV1d33oM3vWDMBlR3b46a1d+Unm1Ou8uJ2yDfqMrZ7/NGNV8="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "pb_TKRXVJY-27vIG_A81PMH-cdY",
      "x5t": "pb_TKRXVJY-27vIG_A81PMH-cdY",
      "n": "iM24cYc714exgvGQeAuw6pqYqkSf7NEuLug5jCYcGqa2APSSjzks5h7en-uEEnE0q03VeaJB6PWxaE3GTfGKXzr-sPudGCTTOsgnY3t4ms3DLeyhZvWi5ADc4JtpLBQOxYm1f4ReGwryZqsOHdvqNiYn7B7PyN_3dVbUuXWaueCJ3hhW5JyXkRGD75cOsgOm7GU3tYtOcxm29yjOzNcQXOiL_fChEz6G6bjOHzFYISgv5m7TffaOEFF4T4RoP4AQ35zvxjHx8XkBQPTz661TjTN1h_mYsFEwa2cDcErjJ4dJTdKSkM-VFPDklcSXsrDhkOw42ZeuKAoQTVep5EJ71w",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQNas2IybvbYSgWXpOzctlSDANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwNzAxMTgzMzA1WhcNMjkwNzAxMTgzMzA1WjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCIzbhxhzvXh7GC8ZB4C7DqmpiqRJ/s0S4u6DmMJhwaprYA9JKPOSzmHt6f64QScTSrTdV5okHo9bFoTcZN8YpfOv6w+50YJNM6yCdje3iazcMt7KFm9aLkANzgm2ksFA7FibV/hF4bCvJmqw4d2+o2JifsHs/I3/d1VtS5dZq54IneGFbknJeREYPvlw6yA6bsZTe1i05zGbb3KM7M1xBc6Iv98KETPobpuM4fMVghKC/mbtN99o4QUXhPhGg/gBDfnO/GMfHxeQFA9PPrrVONM3WH+ZiwUTBrZwNwSuMnh0lN0pKQz5UU8OSVxJeysOGQ7DjZl64oChBNV6nkQnvXAgMBAAGjLjAsMB0GA1UdDgQWBBRsbUU+6mjS1sX/3Ek+xKEA6JTeLDALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBACO1MS24nE70L0Tcw4NRv80uZ8b5OWAfsAO+AN7zwXeo6J7TN/sslMuQ9FtL3Coot2ItdYaFHmfzKijuCV17EiWdXXccwoGEZqp3y2gvyYCof2OVQK4/KZVPUhI8wg2kR8dn09B9fdiMmwqd2+ZezWbgvSz1fQz5gZCg5FbFFojYvQL65bIq3tUZBtAT7ixrcGOfFbYzZbpi4mJdJItidd3Oh+TXfexzRL5Cw7Zn4LGlUVUOwildBfYtB+Fr022wutr/adxjJV7wgr6AxaTlls/hQz6+TOs8Vmyeb8KsU9CJZRXPIBKvZwAyMJsDZ3l4x+XPAZYQo3i6Oa4F5ROR9ZM="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "yBm7yTZhZ3SWV3-9inQcQk1X51U",
      "x5t": "yBm7yTZhZ3SWV3-9inQcQk1X51U",
      "n": "nwNwsp54S9SUESzWUZXc0dY19bOVn4smmRSxANxPblU0nQEBpDPumlBVYmHI3XXVIshrh2DAl4BSVfQhVKLCu35Vyv7_P9cLvmqM_dvIHEjtrQPPFIBlH6fitB4v5zs7i7_zV-mTteGsNoUWg-TtHHKekJBrrBxoJ633vvaZ9AEFP8OdZoVGjXW1Wb76nczV8uhjgF9u69XrOPVrYB7YcxtiA-jRzn8AQRt8SfkrIvEjDL5ejtxRNyucz8dFzmbrCazoUY3oeei6UHjdtFgiODs4KE29e6p1Lm4CexjkcIrFWXkoxytOKEsB5zCGq8pQeI-tGmoCBhVnhNw7u5okjQ",
      "e": "AQAB",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIRAMtLWPmqFNLXNg6BbZWr9EAwDQYJKoZIhvcNAQELBQAwKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MB4XDTI0MDYxODIyMzE1MFoXDTI5MDYxODIyMzE1MFowKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnwNwsp54S9SUESzWUZXc0dY19bOVn4smmRSxANxPblU0nQEBpDPumlBVYmHI3XXVIshrh2DAl4BSVfQhVKLCu35Vyv7/P9cLvmqM/dvIHEjtrQPPFIBlH6fitB4v5zs7i7/zV+mTteGsNoUWg+TtHHKekJBrrBxoJ633vvaZ9AEFP8OdZoVGjXW1Wb76nczV8uhjgF9u69XrOPVrYB7YcxtiA+jRzn8AQRt8SfkrIvEjDL5ejtxRNyucz8dFzmbrCazoUY3oeei6UHjdtFgiODs4KE29e6p1Lm4CexjkcIrFWXkoxytOKEsB5zCGq8pQeI+tGmoCBhVnhNw7u5okjQIDAQABoy4wLDAdBgNVHQ4EFgQUFGb4FaXDu89wqG9A6JK1xLUMKPUwCwYDVR0PBAQDAgLEMA0GCSqGSIb3DQEBCwUAA4IBAQAw3cpDyl03Kgka9P2BJR6xU+C+IiWpJVLbLbdvBepqGI1/NqXCrG7E4INS5oRsFVO8DuYXws7Ko5kKCTV+iqkGngtG9b/JFP8QBcRrhngHTnE8EevwLkDtqFvpBdNnzTmOJDP4FdtYRuucJqx7aLE1MXr2jEkKfY7YLu2YEmOG6hnZfqWeCRm+g9eUolbhexllsdtj3bi9V9c8anXPLUsEeY/BRT7n4TBGJBWDD9kYEgoMKPLp58Om8aY6BucKN6vjf/v9RR//2ggCXX+qrZP3ebj9cXI6dWtgn5WwkBTfufIXnbbrzyCp/jdCP7q8SXbG2MeFiqKLKul5q5neiIdm"
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "eDy7SrXhS8hD-j7vBEB-PviWk60",
      "x5t": "eDy7SrXhS8hD-j7vBEB-PviWk60",
      "n": "qOkchuk_biLSgDg8mbp7I2NjG4z5h8mRaqNmnrTQS-ns0KhQ99ZcQNt6C7katYPX2usgIhkTzw3gRdEC2djmYr5uBkpHiLj-j-ZSX41icTpzFRSxzqcrBf0c528zSXGf8Zxc0zVcsEoxFnV0WM9wIfcHxhPIg0LdL6fneizJJOz2EuxTkZByktVaKdoCoe_aN1ZeIDg6dHm00wluwNoeCHQbvN3ZaR82pRsybEY5087-Co5AC9Vrw-fweGzbiTdYwv_N3QOmKZu6uD4NTpIRTA3amVkjL9Q-eIFnRO-fok0PknmK4TXC26WkJYzPGQfjE8ywy1m2Sf61SgDNmq7-Zw",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQVfLMl4NvF2eutT7jEMQzHDANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwNTMxMTkzMjMyWhcNMjkwNTMxMTkzMjMyWjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCo6RyG6T9uItKAODyZunsjY2MbjPmHyZFqo2aetNBL6ezQqFD31lxA23oLuRq1g9fa6yAiGRPPDeBF0QLZ2OZivm4GSkeIuP6P5lJfjWJxOnMVFLHOpysF/RznbzNJcZ/xnFzTNVywSjEWdXRYz3Ah9wfGE8iDQt0vp+d6LMkk7PYS7FORkHKS1Vop2gKh79o3Vl4gODp0ebTTCW7A2h4IdBu83dlpHzalGzJsRjnTzv4KjkAL1WvD5/B4bNuJN1jC/83dA6Ypm7q4Pg1OkhFMDdqZWSMv1D54gWdE75+iTQ+SeYrhNcLbpaQljM8ZB+MTzLDLWbZJ/rVKAM2arv5nAgMBAAGjLjAsMB0GA1UdDgQWBBQf4ja0kbV2Qs/8qV5NQ8lbOmJlsDALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBAFwJTCekaVAfimrXp7BzDT1L219Vj+sPq8Xj/wkmMjZKT1yakYbQOTf089eYKiLeBScq50VKhhqrShtMLBq6QK+fgWnN6ZPifm9iPHbOxp5ayds4EnMYTJFlLahx72CUv9ujxeFxl+dn/Ifv3sOzWLm+VhJj6pzA5oUuGE0xnmdNowPAUaRqGc+S/H995KsmAD8nvHl2VWk9gnlSDnnEcab+KYkoRibHi0AscfB1XE4oM1mCaN9+PYG9rgtKXAs2bV+l3v1PMxjyVH8fumA33Z3uARu9C0e7setkCDHak/PL1TY1jEcVouTP0xlxE5x+S+BXkJUNvxBjN1tkD2oPDMw="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    }
  ]
}
