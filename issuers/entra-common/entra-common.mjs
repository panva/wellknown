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
      "kid": "KQ2tAcrE7lBaVVGBmc5FobgdJo4",
      "x5t": "KQ2tAcrE7lBaVVGBmc5FobgdJo4",
      "n": "08xqQ-OBv9jvWmtvWw8g3IkcuDHVOAGCn3K6TXyKie0L6cAyQWNX4vqxbt0cHdaLunrzaFJ2mIGj_qfor8KR_FOFVFOF24FAakB5El96LvsTwlWJNIw4kpf1O_xibycZ_UcDAEqABJfe51JSPh-PxI2sXt0UMapSjvTdnps0Conp11Ay_yupl_h7nawVg0kzw3QDX5-vKTruiHAHr845YwDRW1yJLEgkUPYXdM8d_SrRgqb2RKJEN8D1c4-SUpFHKwGAwLgVYH1cqwADX9el857z_2uKqJoP48l8WqUOfNGdvx79RCgF1NzzRh07EQrk0GJ_EB8eO-EF4YHLPImVtQ",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIIRf5MUh/1XVIwDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA3MTAxNjA0NTBaFw0yOTA3MTAxNjA0NTBaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDTzGpD44G/2O9aa29bDyDciRy4MdU4AYKfcrpNfIqJ7QvpwDJBY1fi+rFu3Rwd1ou6evNoUnaYgaP+p+ivwpH8U4VUU4XbgUBqQHkSX3ou+xPCVYk0jDiSl/U7/GJvJxn9RwMASoAEl97nUlI+H4/Ejaxe3RQxqlKO9N2emzQKienXUDL/K6mX+HudrBWDSTPDdANfn68pOu6IcAevzjljANFbXIksSCRQ9hd0zx39KtGCpvZEokQ3wPVzj5JSkUcrAYDAuBVgfVyrAANf16XznvP/a4qomg/jyXxapQ580Z2/Hv1EKAXU3PNGHTsRCuTQYn8QHx474QXhgcs8iZW1AgMBAAGjITAfMB0GA1UdDgQWBBQGoURL0sKGdYALEdvfObZ6NEgmJTANBgkqhkiG9w0BAQsFAAOCAQEAl/UkmIa4OvsgULkBmGIZ6HeyJDvVuORphBK9/vpxEFsgnlitwMncBO54uMjJVr63baV490ODSI+ZTiCh7WGM+zrSjllCbVWDxjrdXA1ygHnXX7bXecIQyDmVb5/Hfb7DmQ4MHa3lEwf+pNS5XJeOhPoduRsfYCdD0QbxEADDgqV4FtgYx4I+iAoqbPDPou7wchEu9d3MuFuTMorkTvDLCyTHi2rgBnk9GBf2rArCGyTpvVPGXmxBttqgm9krFRujLj00u9jKUx4YkmAhS9YRddME8+gh6X4qFMxQMhyzkaBxjLs/E+pwMJaUwBqvostwt9+52qrMSUo+jkFgiGCe4Q=="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "SjE4tvzAwAoo6GB32-g1QAdgIck",
      "x5t": "SjE4tvzAwAoo6GB32-g1QAdgIck",
      "n": "ul88fCCUH0e4sqPqWOFj9BWGIctw2JJhoBO2aOykMvbjgr3Sn0ZbitaJTi5L8HFISLmwdSGvj76SOe7qNV0Jb0PuOb5DWTB_f4hXXPqZLfh5Bn7uyuTRapbaRczDESR1BuubTodJyhYapb1B19F4EbMbmvce2kXRRWZ5OFJA_FR7ZMU2mwLD5yzuWo_gr_52FwZZSBX1fkPbmDLriJoEIl8IVMMK11hlyK-m0LYsT-Tz_AHX3eT2bct-4xQSZAKsiWj68q4a6ek5LO5oM1MrkoFhErCDMWz-N8v7mM1qyy_kUQ417ZBBNGg5IvoIuM8yYQLMsH7R3i24UpT_kkJE6w",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIIDlcb6PCgUSgwDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA4MDQxNjA1NTFaFw0yOTA4MDQxNjA1NTFaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC6Xzx8IJQfR7iyo+pY4WP0FYYhy3DYkmGgE7Zo7KQy9uOCvdKfRluK1olOLkvwcUhIubB1Ia+PvpI57uo1XQlvQ+45vkNZMH9/iFdc+pkt+HkGfu7K5NFqltpFzMMRJHUG65tOh0nKFhqlvUHX0XgRsxua9x7aRdFFZnk4UkD8VHtkxTabAsPnLO5aj+Cv/nYXBllIFfV+Q9uYMuuImgQiXwhUwwrXWGXIr6bQtixP5PP8Adfd5PZty37jFBJkAqyJaPryrhrp6Tks7mgzUyuSgWESsIMxbP43y/uYzWrLL+RRDjXtkEE0aDki+gi4zzJhAsywftHeLbhSlP+SQkTrAgMBAAGjITAfMB0GA1UdDgQWBBS+wOJGOC8r3kutKW7UjRnXV2QlBjANBgkqhkiG9w0BAQsFAAOCAQEAtGOU0QsTPGFSteuIf1N9gM+qiONQqgfb66+FT/eXvuacFMa4pgXpUN0/AuKMxBg5kDRcms2PibWzefZ7RrRfLosKtViwVqkkKK+oyuSYXVArz+8u/v+jEgBh3BoMPqB3ukvCpGTB0rHX+QV1zNBac7hVQs/4kEGcr2/Nsa1g/uVRh2N7LQo9YRImmeOk/JrxgaSbkioW1xsQKMv7ZJLSLaSLXhAvA3HUU2kHMJCXE2VkNrs/naA47dWkMa9Af1GeqOe8uH+EJu88xz78kwKk2EiZt41ZaTY57fXYCxlnNQzhRdvm1KmJ8OfMUa/pqtXKWzrPWL/vs2oDsZJz9DzERw=="
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
      "kid": "XFdyShyVnqakRdeHXuGqcmnIaT0",
      "x5t": "XFdyShyVnqakRdeHXuGqcmnIaT0",
      "n": "lKqwCXJDN9A1gtWAMVi9S4-FnUWyXB3-1Yca5x3GMMIKuh93W5zfv2H_c8Zl2lDrvs0_HEfs-RWWSWJUTa_tChWu4kdEzjiM9IZ5fjSMLYpQ33gEWvkkntPlyW2q12i1hOB-e_EafhqTcfJEXPqOTXh0kkLbZjnkBq5Y1seSaAdHkiN4nZkd4DueSsr2hPi1XU_B8ozAUJGRKMWlv9N5BlsBr-deI2-vBPIBWfPo1Wqe2oDPEJu0EFPhaMydXIaBGeaCZGOSMIsp04OoYJL9SMP8bhr7okGaszi3umwOTiQPEpzySMT1pVowwozeZWdiWz2WLwTS-kKNAwygzxXhgw",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJAK2NZLp97QhoMA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDA3MzExNjAxNDJaFw0yOTA3MzExNjAxNDJaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJSqsAlyQzfQNYLVgDFYvUuPhZ1Fslwd/tWHGucdxjDCCrofd1uc379h/3PGZdpQ677NPxxH7PkVlkliVE2v7QoVruJHRM44jPSGeX40jC2KUN94BFr5JJ7T5cltqtdotYTgfnvxGn4ak3HyRFz6jk14dJJC22Y55AauWNbHkmgHR5IjeJ2ZHeA7nkrK9oT4tV1PwfKMwFCRkSjFpb/TeQZbAa/nXiNvrwTyAVnz6NVqntqAzxCbtBBT4WjMnVyGgRnmgmRjkjCLKdODqGCS/UjD/G4a+6JBmrM4t7psDk4kDxKc8kjE9aVaMMKM3mVnYls9li8E0vpCjQMMoM8V4YMCAwEAAaMhMB8wHQYDVR0OBBYEFO3OvEAxxuYAdBd2pnZ7j3ml8KmnMA0GCSqGSIb3DQEBCwUAA4IBAQA910U0Bsg4KDYLpbd/rBDUFEwGGgxO4GrrZO7gF4h/soZlunshPwGi6Yr/dhkP8w811nLGbIkjbmeZEa9Wcps7ixhNtlKQAeC1h13B1GM1+qsx94dUOCwrwgmMJ3OuYOHBNFWRI6y0qXnsA2MEyGaa1kyFGIMVnu+SgVr6O/6p5bxqtiMW7sYAD7QjEuWONOysrQ+m99lCmfggRWO+YHeYfI/M0lopzckAr9/MTZQrt0PuSFQu3VHb/Ffuoks68szx3yNrlstwpurtcoLxgAGZ3+IXJ0+HWB66d/UjPwSiwJg369qjC9pJuH5UNkWywneIMKNPrJDE2pM0NswLxybn"
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "mtHbMAq_O-xAgcPetxlNRFqZ_yc",
      "x5t": "mtHbMAq_O-xAgcPetxlNRFqZ_yc",
      "n": "izg2nbZwOy4EGLhZfUAYqQFPovV_d_mktn26jesDDZu0DEiuT9UW-B4ycAKYjbMv8f-csCSAQGHnNxg-41ci06gw-GA8A7nr8xrHmRjb_glcBCgOzltfvrfIr-t8vUya3nGcCDXgXTJJNc-1zmj1tvL9BMJkkGJ1CaaLRKxbM9YOBgAfEK9n8AzF-r-SIQGyDa3z_fn76xqFbVL3lZwj2jbR28rACWbbagGwVlG9v0aO6Cet3ymR9w1jKc6KP7kFTKiMuQDTO2r2O66hhZZHi1gBWLk2dDk1TFuMblUDbaPX9hjy1q6RHk_3H3iLNfnMuRowLOmM39CthWYQdOHWKw",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQCHD7DUvIA1DIfuhLv1I6ZjANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwODA5MDcwMzAxWhcNMjkwODA5MDcwMzAxWjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCLODadtnA7LgQYuFl9QBipAU+i9X93+aS2fbqN6wMNm7QMSK5P1Rb4HjJwApiNsy/x/5ywJIBAYec3GD7jVyLTqDD4YDwDuevzGseZGNv+CVwEKA7OW1++t8iv63y9TJrecZwINeBdMkk1z7XOaPW28v0EwmSQYnUJpotErFsz1g4GAB8Qr2fwDMX6v5IhAbINrfP9+fvrGoVtUveVnCPaNtHbysAJZttqAbBWUb2/Ro7oJ63fKZH3DWMpzoo/uQVMqIy5ANM7avY7rqGFlkeLWAFYuTZ0OTVMW4xuVQNto9f2GPLWrpEeT/cfeIs1+cy5GjAs6Yzf0K2FZhB04dYrAgMBAAGjLjAsMB0GA1UdDgQWBBSLDNt49KevOF+s4TnaxSrbHTM0IjALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBAILuIKKPRxru1dAwQqCb3nWPv2DYHgGZuwC4qTkXPLCHtNH7zXwtHTkBDK9r51KTB8R8POx+Tn1ccOhav0vPFimWGb7+2MmbQV+jaH5Y7tboZEAPpi+907m0zJ8zlfqjhlh5s3q2LU3wOFCVNz67y4G7L46k+wikClRKPnBfHANIonohgxizEgPUmwqskgCOEAt2qZE1Ccl88sBNGu1Wt5g5Wx/FxqAZCPfHoM6wAsQnj+e82TPa/QarnyBh/My2JeRx/vRbetw0AqawBB2oGfAYl074oNzJ8mcsXsJ0P41nKgBA8vHf3L+dvW6lETXPEzF1AzMfUhNOfX+ucEk/Y08="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "M1CaDXP66i0SbDgzKW8HE0JFL-0",
      "x5t": "M1CaDXP66i0SbDgzKW8HE0JFL-0",
      "n": "ng1FHaNCv58xBj2JKnB-GUWx-VQ38y3THNtCk9x73X6cYYIZCJRYMUPkhS_-zt6sJly1xaNV02it7cJY0AqCa3roCvm9_8FjJJQVBQFfqU5A32iCx0pdsID_vY_yRBmS_NKSNDsFDTD375uYT49ch9tlMvCs6-RgRGqRwoPmnEA-Og0oXWRZiGEOEtKb4YnM7RhvjBzOfpcYxo29ZvsVErYz6B5xYhB_a42Jo9TnVD_QKMNuDfS2hdGm9Rynh6yjWoOaEtm0VlrB6s9pPsYphsa53dSxRJKcsQmzRn_Gw5DWSL1vkKTUTTY03c5m4RONADGNwEMzsjQWUwLHPwlhjw",
      "e": "AQAB",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIRAIAVSjfbfb9P1BilCO8uJiswDQYJKoZIhvcNAQELBQAwKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MB4XDTI0MDcyNzA5MDMxMFoXDTI5MDcyNzA5MDMxMFowKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAng1FHaNCv58xBj2JKnB+GUWx+VQ38y3THNtCk9x73X6cYYIZCJRYMUPkhS/+zt6sJly1xaNV02it7cJY0AqCa3roCvm9/8FjJJQVBQFfqU5A32iCx0pdsID/vY/yRBmS/NKSNDsFDTD375uYT49ch9tlMvCs6+RgRGqRwoPmnEA+Og0oXWRZiGEOEtKb4YnM7RhvjBzOfpcYxo29ZvsVErYz6B5xYhB/a42Jo9TnVD/QKMNuDfS2hdGm9Rynh6yjWoOaEtm0VlrB6s9pPsYphsa53dSxRJKcsQmzRn/Gw5DWSL1vkKTUTTY03c5m4RONADGNwEMzsjQWUwLHPwlhjwIDAQABoy4wLDAdBgNVHQ4EFgQU6VKBKPmHMDXGuzSAtauT3KB/u7swCwYDVR0PBAQDAgLEMA0GCSqGSIb3DQEBCwUAA4IBAQAVXRKtTDxun1ArmjNFnwuRkjfPEvwX7Og3pYR7V1NrUl4WZKnRM3eYfV9iaobq5AmKqZLc28JrdGCZpwcEchsaTbNme+rhh2H++laqg5+Cs6ShJ6o+/SSC4OnCAbExgx4FkOBgcj7z3U26Lv8lRTryGifWvLEiBOOX9iuBeBLQIiGR96O4AeeeoKgnpooZQkjRbUPZZ3RXRsghekl7Re0CjX0yHUyWsERUDcLDjOihBBjtKgFNsSiENzZeEslaRf0dhlF9nw3KIaROSRknMwzPgOHM4GKJ7CMufA92N/owJjtbOa3YnUjAj26XpVNtDxq//+7DJ61K78vZClOSclak"
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "dGtHQMhGltJUCcH_SQW64nEUoYE",
      "x5t": "dGtHQMhGltJUCcH_SQW64nEUoYE",
      "n": "io_Qh_kyYBnXCXPV54XbUZheP_fpWo5M0-_aWJQ6i-CebDHQVpxHurahUYj446qEvUBFK-goUEDU1Ah87F_KXNDQhsJq0F422joJPIzsHSsed_k0KlYnkJgCeUC8yHmtgSnNjH7jCnnBZ6Oznt0rdEw9MVd_2ofWgoA28XRUQ_arpXgGo8EWSPWuLGsG3cKTsSVW-1d_JSZ56S73j5YBDQz11ZPVm13nWohrGEgPBgswCCLUsZod0t1oTiRmKihRom-FhWvsfFixUZ4D39XSk51UjWttu1gnhhxhV7PVqlaqbvQ1D2urlpgMnAgyeQrIUC-3L-fN6hwD_1NZCaQdeQ",
      "e": "AQAB",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIRAKdbZc1Eb0WDFn5HsLQuwwYwDQYJKoZIhvcNAQELBQAwKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MB4XDTI0MDcxNDE1MDI1MFoXDTI5MDcxNDE1MDI1MFowKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAio/Qh/kyYBnXCXPV54XbUZheP/fpWo5M0+/aWJQ6i+CebDHQVpxHurahUYj446qEvUBFK+goUEDU1Ah87F/KXNDQhsJq0F422joJPIzsHSsed/k0KlYnkJgCeUC8yHmtgSnNjH7jCnnBZ6Oznt0rdEw9MVd/2ofWgoA28XRUQ/arpXgGo8EWSPWuLGsG3cKTsSVW+1d/JSZ56S73j5YBDQz11ZPVm13nWohrGEgPBgswCCLUsZod0t1oTiRmKihRom+FhWvsfFixUZ4D39XSk51UjWttu1gnhhxhV7PVqlaqbvQ1D2urlpgMnAgyeQrIUC+3L+fN6hwD/1NZCaQdeQIDAQABoy4wLDAdBgNVHQ4EFgQUS8ytdfEdWAsFJApZy/6lA7wlfgowCwYDVR0PBAQDAgLEMA0GCSqGSIb3DQEBCwUAA4IBAQBDnyg3sAC3S64Pm4xA81r2kts96usCRu7tF34f3RJX7Met+rJMrllpRT8zVTzFTaPjHsJvhl5F/ApD0lZN6noy7UwNjbnMoC/lYluPLDuQE4ClstsgpNBdSNF0l+tWk085sIM7LF3wAuf17Yp5jIXCyokbbDJb5+XpNGZm4ukTLADajk/jk76z7p94shgV1XMla3fV+1d7jDL6UlbIvXNUSp3swvSLQPv90sSI2OUwTTulNZDokmeWtLUedTTIpnu9y+vLJWbKiwtenYbj3zM7VN/Qr5aXl4w3Ajx+QKnRydv1se8ycMabu28OFXgP92AsY1/NW4BF6321OOq2OmbC"
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    }
  ]
}
