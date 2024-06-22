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
      "kid": "L1KfKFI_jnXbwWc22xZxw1sUHH0",
      "x5t": "L1KfKFI_jnXbwWc22xZxw1sUHH0",
      "n": "ojzOLoPAa8DykJWn0dz9vB_lPTkwtCyw1oR8WFpszoBaG-hKmBhYLCuyyOWIoIgmxETI5-bulQzsCTR79WWxq6sNxXPTlBy4i1ihjwhnD7CrgRu0U_O8GPzMMPlQXYs_C-tt0OdPPYEYv_ZzbNkgMTNaR5WWe-d3L4nDMWrSP70Sz-8_kcmA1qaap_MT_N9a5QidD20bfOvdXttNxu6_azAVN5UYeBevrTaJHO2HRVicw_zKwJSZV26jljpsmGMiNUu2anARS2C4KM_HCIfX7cwE9A89pJ1Uh58bBL98b1NDzGkt0hVCBTilPakhR4RHP0U9dvHFo3pUJd1Qrl9AQQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIIOdwuMdHVGkEwDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA0MTExNjA0MjZaFw0yOTA0MTExNjA0MjZaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCiPM4ug8BrwPKQlafR3P28H+U9OTC0LLDWhHxYWmzOgFob6EqYGFgsK7LI5YigiCbERMjn5u6VDOwJNHv1ZbGrqw3Fc9OUHLiLWKGPCGcPsKuBG7RT87wY/Mww+VBdiz8L623Q5089gRi/9nNs2SAxM1pHlZZ753cvicMxatI/vRLP7z+RyYDWppqn8xP831rlCJ0PbRt8691e203G7r9rMBU3lRh4F6+tNokc7YdFWJzD/MrAlJlXbqOWOmyYYyI1S7ZqcBFLYLgoz8cIh9ftzAT0Dz2knVSHnxsEv3xvU0PMaS3SFUIFOKU9qSFHhEc/RT128cWjelQl3VCuX0BBAgMBAAGjITAfMB0GA1UdDgQWBBTXp9LEVP2CZiM0hEP5t18l/sDAfzANBgkqhkiG9w0BAQsFAAOCAQEAH5vIhhDC8d+31sm9Lo5Ohlsabmv7eA3JgXKw7x4VDFoQxrZHMw0qsQOk9bTrwJHa09o0CQkO8VZG5zJ0ZpXplRtrN8FaKCLb1qstF2P6wuZIZR1EJTJb4L5VvhaSUiFWkBfQPBDMVJd9g2CEOhW+1jIKEea0wt3AC2zUvNybhbSzDMyPNSwu0EiZLJsUMdbOxdGmCZjvIWMaddDu9GVT+KtPWYDDKs2POZoYPDGCp6ftd2+L+ma2gZCL3HvFBWjCIctsu20aHP8retkEOiVzMVbt68gDyT61VTlhBM/pxlcHMO6wfA1nQzY2qDwMCEOocmsYt3mrITolYxxyBjSVnA=="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "q7P1NvxuGQwDN2TaiMovjZ8aZws",
      "x5t": "q7P1NvxuGQwDN2TaiMovjZ8aZws",
      "n": "5zTZoN73VFw72O9GclJ0RC0twt_UsZcyxJUdrXCocvd1q3TcYgeK16mamE9r8qXasMOY6oH9_05IUBK9YnW8TH1QrVK-TMdvtc72Ini1HiKK3Hi0dCAL3NYBvVMBifYqHrL6xVqieEybjrUKTWgCHV6I4r3U5NR05gOTkIRtN8G3McvegMpakftFJciOqlkuFVKhwpCw4iP_860js_GrY65SJqqkf3VZSU77nqiyqh8UqiDMoM59qEq_r_Ji8MbSa3HA3AK5wL7yBh8dWxmUXjQ-iYuxyvFFFBrIA8J4P8rdoUntyJOzNxi2H3jH2Xh7TCahXetwRGVE3k073iUbxQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAIUr2EPXFV9MMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQwNTIwMTczNjU2WhcNMjkwNTIwMTczNjU2WjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5zTZoN73VFw72O9GclJ0RC0twt/UsZcyxJUdrXCocvd1q3TcYgeK16mamE9r8qXasMOY6oH9/05IUBK9YnW8TH1QrVK+TMdvtc72Ini1HiKK3Hi0dCAL3NYBvVMBifYqHrL6xVqieEybjrUKTWgCHV6I4r3U5NR05gOTkIRtN8G3McvegMpakftFJciOqlkuFVKhwpCw4iP/860js/GrY65SJqqkf3VZSU77nqiyqh8UqiDMoM59qEq/r/Ji8MbSa3HA3AK5wL7yBh8dWxmUXjQ+iYuxyvFFFBrIA8J4P8rdoUntyJOzNxi2H3jH2Xh7TCahXetwRGVE3k073iUbxQIDAQABoyEwHzAdBgNVHQ4EFgQUJSCw1VY3ENnj6/NBM9HZ9grC2VwwDQYJKoZIhvcNAQELBQADggEBAKqanf7BVcad5bQYmtuiibJUylTCFRiqHcMKlpHIBHV+K+N5xKWIkoJRqeVczexOpuZSUEJDAWtLcDdXnni7KcLWui9+5qcGFTp/7HIkFyHDMJq9CurEJGJk1gl0HeBUPZEkepkVmFNtHzqjSMnEy36NE+PyD03pz6xJMj8VCVxhNlWUu8BLn6L1OKmzMWlN8cUDO+MMHFh4rsoe4/OVlnhKCRBWHlUhTW/qZVGsiEwAZYriIjd/rEbO4YT2dudwBcHWdAYmy+dK10ql2FQmUCGvJf2otjltwy4epq2wWTWZedVNPYFAYaQb43vFKfvqMjwPQwsKpJzzcf9rKwaHHl4="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
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
      "kid": "EngR4Vzr4KsOR7allG7pwvY8T2w",
      "x5t": "EngR4Vzr4KsOR7allG7pwvY8T2w",
      "n": "urxanQmOAZIY3oMcZHwfeqNTAxaQjlwfqdOJFGVPUbEobXxNy7kseJROxOq2j3RMYQdrW6cwdux-McUd4ta6FetWnrWAs9oFaPQLYhyrMwes2MXPmr6ONNkY9Y9INkgAmitIarJgaY8-Ffn8MJf_87hACelpnz15w0n8d4jqAExTn-fEbB4mxe40SoBgCcEnjl769Jsi6I9p-Wfex8VE5glDWjx8IF_WdeUqPmkWQkG69l17FRK2b3hjULVgEGjPDzp7jy3zuiWFH57QlwrTRFGib55nlTkwjNVHSvO9XOosdIUF7Rfle79OkCLyBCl-fu5r37vDykIrtR9rteBMkQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIIM7/L6nITY80wDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA1MjcxNjA2MThaFw0yOTA1MjcxNjA2MThaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC6vFqdCY4BkhjegxxkfB96o1MDFpCOXB+p04kUZU9RsShtfE3LuSx4lE7E6raPdExhB2tbpzB27H4xxR3i1roV61aetYCz2gVo9AtiHKszB6zYxc+avo402Rj1j0g2SACaK0hqsmBpjz4V+fwwl//zuEAJ6WmfPXnDSfx3iOoATFOf58RsHibF7jRKgGAJwSeOXvr0myLoj2n5Z97HxUTmCUNaPHwgX9Z15So+aRZCQbr2XXsVErZveGNQtWAQaM8POnuPLfO6JYUfntCXCtNEUaJvnmeVOTCM1UdK871c6ix0hQXtF+V7v06QIvIEKX5+7mvfu8PKQiu1H2u14EyRAgMBAAGjITAfMB0GA1UdDgQWBBQd+CqQovzU1jPiAhXSrfJ6ZMRB9DANBgkqhkiG9w0BAQsFAAOCAQEAIYippLnkf7dZ74FovxiCfCadGp/iO0VvCHhBmjLA42qS766IujRzdQEIGiz8vGZjwnwu/sw24vWJkCqlf85JkU7Uh9QnC+6ip2UXIelNgYHa/U3k4VIafEmPfhUkA5wsB1ZA4m52TFSO1yD4iQMZn3PqhIiL6voArtD9Hyl/TebdbF8PFcTfxDII5St+mH6eO4A8xTvGeWMqTD/X495Cii0Xm+XcUCS8zAFchvvhHUPALVKs2uzXUDaqkxXeiMylSFr6mp+xDNo59QmiDS3LyuuXvgUfspz890JXJZeOFzq4ZZqkKmn2EFX2xIJ97plEYvg1DblD/M6YJN8MyLKjrQ=="
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
      "kid": "bE2CI_tkJvpzPUdG7-y9UjG3eGE",
      "x5t": "bE2CI_tkJvpzPUdG7-y9UjG3eGE",
      "n": "53xUa69XdpzUXGDUjS0Be963ntc8t3JpU4gWUAKdavkPx0RPhz7ajqnMuUPaXTuHqMoXd2cbb8A6F-pOLMm0-8bg2u2Fan3Sc5XibOyzn3-bbXUVtSPiuY5c-E6pBnntJR7XapxQ9XSJY95OzJwvToGMQawCHWZKBtyAVXBJfjXJRwnR1C5M7Q5ao2nkKKyg4B--gHND3zz_Zrt6tFsWsHpAVY0zU1kocsKh98bORrxhp9mcp4nOUZt1GccpRjHeELSKInukJft1SzrFHjfwusSOBqXknUjMOH96NpsBYwXnFeO-bxHoBw_nHcS31dPUb7tQ813TkKwGY2wi3OqDMQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIINzYV3a18rv0wDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA2MTgxNjAzMTZaFw0yOTA2MTgxNjAzMTZaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDnfFRrr1d2nNRcYNSNLQF73ree1zy3cmlTiBZQAp1q+Q/HRE+HPtqOqcy5Q9pdO4eoyhd3ZxtvwDoX6k4sybT7xuDa7YVqfdJzleJs7LOff5ttdRW1I+K5jlz4TqkGee0lHtdqnFD1dIlj3k7MnC9OgYxBrAIdZkoG3IBVcEl+NclHCdHULkztDlqjaeQorKDgH76Ac0PfPP9mu3q0WxawekBVjTNTWShywqH3xs5GvGGn2Zynic5Rm3UZxylGMd4QtIoie6Ql+3VLOsUeN/C6xI4GpeSdSMw4f3o2mwFjBecV475vEegHD+cdxLfV09Rvu1DzXdOQrAZjbCLc6oMxAgMBAAGjITAfMB0GA1UdDgQWBBTYkS8LifSX2GEr+tRTT4rIDmAcADANBgkqhkiG9w0BAQsFAAOCAQEAytKaO4bVqmymcRVF2LY5I9WBRXkW4tytDZ8jDH1QJXzMFg7PYGB0aQR/w0x6WR+nuK7rtISs90ATnujoERqwnU6NBrqMF6gsGCOPAewFZ4KAzSet1sAkfNkhFcx1tINaDZSJg4ampdCE6C+KC6+Fg/vNHz0lmR3zWa3GHWX5QnVtSvekOx2m2PNI+xSbqf7wXV7VjdP902UJOHu6nZgTCQDpsxS6OB77V/hosBb0Sc9lbTeOW10GnOVlUmKNqFP7sWqOXeQtYW2fZ+OnWcT7MtPdtPd/FZTlRheJ4CQwY6ChH+lCkSle579VfEHTpv7tuFbelP8E1WzaPhOK3Eh62A=="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "UxyGE-ffaoAkooUxUFn0ar7fvDM",
      "x5t": "UxyGE-ffaoAkooUxUFn0ar7fvDM",
      "n": "2fVfr9fJb8m5eDwVp6WhzO7-ezI9OfeQPTpHKB8j2wlBJNu6oYGPC4McDysfNyKtUaYQpyckupAquEjAcP8CDjcv4B7pjdlgR25JLXuemMl8LD5bOu4s55EwmPewoHlBInWDK5rgRryoApZNQGVuI4u7Q56DNNsXo7I1qS13MmXKrwO1rp0PIetHesDNT2nnY6xjHlTGPkc-aydV8QNulStdiXOnbiV7wQzQmtqjK3AWE_oJHIuTaGwdVeqSqNaJKSCGEPb9G8J1Q-tFh0TOgqPjk5Qb_uO5X_0Fw_4OI1xeGqoMuOROi_StRXv4IvfbGnZgbsV4dOUL0kJEBRPglQ",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJAOnFoXSbn2jjMA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDAzMjQyMTQyMzJaFw0yOTAzMjQyMTQyMzJaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANn1X6/XyW/JuXg8Faeloczu/nsyPTn3kD06RygfI9sJQSTbuqGBjwuDHA8rHzcirVGmEKcnJLqQKrhIwHD/Ag43L+Ae6Y3ZYEduSS17npjJfCw+WzruLOeRMJj3sKB5QSJ1gyua4Ea8qAKWTUBlbiOLu0OegzTbF6OyNaktdzJlyq8Dta6dDyHrR3rAzU9p52OsYx5Uxj5HPmsnVfEDbpUrXYlzp24le8EM0JraoytwFhP6CRyLk2hsHVXqkqjWiSkghhD2/RvCdUPrRYdEzoKj45OUG/7juV/9BcP+DiNcXhqqDLjkTov0rUV7+CL32xp2YG7FeHTlC9JCRAUT4JUCAwEAAaMhMB8wHQYDVR0OBBYEFOBFoFzi/Txj04qIPOx5PFEPf8WFMA0GCSqGSIb3DQEBCwUAA4IBAQCKdwSHnxHX2KZv63dhMugnBXR0qA6gVIOL3d60Nh7TReEhJ98DsSYtxSM9vrdMac+4m6Yg/slvRZD4jet/cH/qCjA+I+LUkrU0MEWqhf03BsEwlSY9ZGbOtWdgPwobFK7Y+M7wuPKSSrwPiBUgrG4UFpZbDVr3VYMljgYfXu3WwtshqdgslvQFQZugKLsoAaR9v1SlNRyOL6qDaqN9x3cHbIniApRjBJFrVijhZm5JRE/vyMgKl6EaBLDoQtvSIOARi8NwZi5LFB0361MR0eE18i87rvPO6cF4Vz2kg+cC9N54wf+gbINHREkbO70B1Q+QbbtlkfWR7y9Q1HMrnA3O"
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
      "kid": "eDy7SrXhS8hD-j7vBEB-PviWk60",
      "x5t": "eDy7SrXhS8hD-j7vBEB-PviWk60",
      "n": "qOkchuk_biLSgDg8mbp7I2NjG4z5h8mRaqNmnrTQS-ns0KhQ99ZcQNt6C7katYPX2usgIhkTzw3gRdEC2djmYr5uBkpHiLj-j-ZSX41icTpzFRSxzqcrBf0c528zSXGf8Zxc0zVcsEoxFnV0WM9wIfcHxhPIg0LdL6fneizJJOz2EuxTkZByktVaKdoCoe_aN1ZeIDg6dHm00wluwNoeCHQbvN3ZaR82pRsybEY5087-Co5AC9Vrw-fweGzbiTdYwv_N3QOmKZu6uD4NTpIRTA3amVkjL9Q-eIFnRO-fok0PknmK4TXC26WkJYzPGQfjE8ywy1m2Sf61SgDNmq7-Zw",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQVfLMl4NvF2eutT7jEMQzHDANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwNTMxMTkzMjMyWhcNMjkwNTMxMTkzMjMyWjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCo6RyG6T9uItKAODyZunsjY2MbjPmHyZFqo2aetNBL6ezQqFD31lxA23oLuRq1g9fa6yAiGRPPDeBF0QLZ2OZivm4GSkeIuP6P5lJfjWJxOnMVFLHOpysF/RznbzNJcZ/xnFzTNVywSjEWdXRYz3Ah9wfGE8iDQt0vp+d6LMkk7PYS7FORkHKS1Vop2gKh79o3Vl4gODp0ebTTCW7A2h4IdBu83dlpHzalGzJsRjnTzv4KjkAL1WvD5/B4bNuJN1jC/83dA6Ypm7q4Pg1OkhFMDdqZWSMv1D54gWdE75+iTQ+SeYrhNcLbpaQljM8ZB+MTzLDLWbZJ/rVKAM2arv5nAgMBAAGjLjAsMB0GA1UdDgQWBBQf4ja0kbV2Qs/8qV5NQ8lbOmJlsDALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBAFwJTCekaVAfimrXp7BzDT1L219Vj+sPq8Xj/wkmMjZKT1yakYbQOTf089eYKiLeBScq50VKhhqrShtMLBq6QK+fgWnN6ZPifm9iPHbOxp5ayds4EnMYTJFlLahx72CUv9ujxeFxl+dn/Ifv3sOzWLm+VhJj6pzA5oUuGE0xnmdNowPAUaRqGc+S/H995KsmAD8nvHl2VWk9gnlSDnnEcab+KYkoRibHi0AscfB1XE4oM1mCaN9+PYG9rgtKXAs2bV+l3v1PMxjyVH8fumA33Z3uARu9C0e7setkCDHak/PL1TY1jEcVouTP0xlxE5x+S+BXkJUNvxBjN1tkD2oPDMw="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "SP89B0VYWSffbnOcvhkYBmPdo3M",
      "x5t": "SP89B0VYWSffbnOcvhkYBmPdo3M",
      "n": "i5dCJ8xlVlPl3gSa1N2GcrwfFXk6Vwohyjz6KX1Obf8K5-1_Uhthgg37WVjHJSiIHEmlDP0JSeGZwuNyqQMghZZxa3wH7P3__vMdQaLuQwjbRg44cmZSRogr6Tn7Y-MUyhkwjWOdxho0WBLWMpeHRabkDMEgbwqmBdqzIYSkjKYCrili4TzmePluLa1E-uaVcqdBwYQC5Hf4Hb8_eQ_iP9uDS6EGOhqlhF7My-jioAhxVfr4rg1aO9jhAJZZxXTnExh54pAVvCirWD0YrGjpTnkBsDDnRtfFr728m-hL093vPRkdBajWhDsJDgFnglWl3EWyGSep-ZBtynZ9OC2W9w",
      "e": "AQAB",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIRAMn2TXWeCPoqmxXQq38xxgcwDQYJKoZIhvcNAQELBQAwKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MB4XDTI0MDUwNzIyMTE0NVoXDTI5MDUwNzIyMTE0NVowKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi5dCJ8xlVlPl3gSa1N2GcrwfFXk6Vwohyjz6KX1Obf8K5+1/Uhthgg37WVjHJSiIHEmlDP0JSeGZwuNyqQMghZZxa3wH7P3//vMdQaLuQwjbRg44cmZSRogr6Tn7Y+MUyhkwjWOdxho0WBLWMpeHRabkDMEgbwqmBdqzIYSkjKYCrili4TzmePluLa1E+uaVcqdBwYQC5Hf4Hb8/eQ/iP9uDS6EGOhqlhF7My+jioAhxVfr4rg1aO9jhAJZZxXTnExh54pAVvCirWD0YrGjpTnkBsDDnRtfFr728m+hL093vPRkdBajWhDsJDgFnglWl3EWyGSep+ZBtynZ9OC2W9wIDAQABoy4wLDAdBgNVHQ4EFgQUdw/FU406xTEfTmi3IL/JBWsPDqowCwYDVR0PBAQDAgLEMA0GCSqGSIb3DQEBCwUAA4IBAQAJVm1zzfNxFZke1R1bhxfGkWBgBpjmcEfyYhPw5uT45N63QzA6bAzsvrdN2fGMmWnYmiP90Mvf23jWxidKgXy1hd8fuRNenH3dVm7yMxVLMBY51fFUzA+ygASPMMtVaOU5+a2XDNEhoQysev2ORDKtz/q2OHDvFjRDBsxmC6zlPDUSxwwd755I4mWqhfyM4bxnH7xzNZvuH85ZT8XeuZ36K2XQsVNBZDd8k79wF52zi5dEeooa89qTwaAXd34WO88TvjT0IbSnGqHXGP8oKTLCgEWizFbwKFFUjg4ltAc3hzFAYIJEtKHw4lj+VAs/7qodALMKt7gZzZMVlSOmX6Vq"
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    }
  ]
}
