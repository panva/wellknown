export const metadata = {
  "token_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/token",
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "private_key_jwt",
    "client_secret_basic"
  ],
  "jwks_uri": "https://login.microsoftonline.com/organizations/discovery/v2.0/keys",
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
  "authorization_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize",
  "device_authorization_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode",
  "http_logout_supported": true,
  "frontchannel_logout_supported": true,
  "end_session_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout",
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
  "kerberos_endpoint": "https://login.microsoftonline.com/organizations/kerberos",
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
      "kid": "Mc7l3Iz93g7uwgNeEmmw_WYGPko",
      "x5t": "Mc7l3Iz93g7uwgNeEmmw_WYGPko",
      "n": "3I2c2shPwo4E7Y9Npyp7A5s4bkw9u3BV0sNsn4Ph2WAZFXduaTy8ZirXa8cQF2_Riwckxcqf2DYmdUKGDb1FCBESW34oV2V5PopqS2llIfwU6gwrbWycQuai7FUG-UZWfud64ZRqbk8oyyYD7gHfijUiZ-nOHd3ozzDS0NNnH6TKCHiwKu-ocqzT7pDUMr3ozu2Gv0Gb4txtQk4m2QbNn4uNmYrSjgKzNH3HYWQgBYAEEgCUkG-nH4Ui1IsBvPCEIig_UhHn-OtJ9ZHnGmQnRQo22VMRWa9WPXYBt4RCA3eljmDYXLfQNua8Z69e40cGoXrSza90KsuXqNLo-0xQ0w",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIIImlMG8V10AswDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA5MTExMzQ3NTBaFw0yOTA5MTExMzQ3NTBaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDcjZzayE/CjgTtj02nKnsDmzhuTD27cFXSw2yfg+HZYBkVd25pPLxmKtdrxxAXb9GLByTFyp/YNiZ1QoYNvUUIERJbfihXZXk+impLaWUh/BTqDCttbJxC5qLsVQb5RlZ+53rhlGpuTyjLJgPuAd+KNSJn6c4d3ejPMNLQ02cfpMoIeLAq76hyrNPukNQyvejO7Ya/QZvi3G1CTibZBs2fi42ZitKOArM0fcdhZCAFgAQSAJSQb6cfhSLUiwG88IQiKD9SEef460n1kecaZCdFCjbZUxFZr1Y9dgG3hEIDd6WOYNhct9A25rxnr17jRwahetLNr3Qqy5eo0uj7TFDTAgMBAAGjITAfMB0GA1UdDgQWBBRL0QasxmIFseaWG/XjtjJHM1pUVzANBgkqhkiG9w0BAQsFAAOCAQEAnGEW7XHZLTkq3okvdMyjJeiENq7OLQuh7pHYjeMqGcdU3TOouhDBgKpIDIF+Icy0KX2GBnJw9peHf8I7KNNK55HU3t69AKVz9pIYlhsjijCichMGKBqaMKR0fuN1s89ZtBg8ku2DTBS7RNZ6bx2xzkb1XDt1tuXklEc9tML5QUKfWHG/7Lg/MAI1dXgVySRYQwCxiWGyZzqUTTXMgtWTuLEpklqAtyDNx5+TNofr5IypYTkW1G2v60EsKkD9dax5zI+3hGgZbY4RMtM+TAG5uWBBks2omCVn1dn6HpC3GNfxLiLxqjFsqC7Omj7vSrX7qq4kgENEWZCKVTsOzVq//A=="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "iw1BXXcybk07kmtIeeJeIYqas18",
      "x5t": "iw1BXXcybk07kmtIeeJeIYqas18",
      "n": "jXmkS1a_ga_ba3tjnIVD-75VhkszCY0LphvRlKI77H5vDL7mwOT5RvW4cTSO9Vd-NgtUqjlUcf1rwBj9hbrtQwOH1YjUAXSqbmIDwtY_GY6Novs2oIDAH-MZaV2FAQEGk_AGDoyS-YWKZkAbVuvZwuNz6n43MV9bx5ECMMGMJBzDkff0Axbt7ePFSBFp4rQPi61MEOseErRirA2ieMKTCWIRr5i_YBceSR8ZSELx0SVaKnNpSBBz0fXxKrcxm12Y35aa7bziZTPWoZS7gKZMRN7fx1RIYXdnrRTanZ1uXqpHi0c10XbNd26yvbbg8Bvmqo1gXSW6XRwDZMVRMit9Zw",
      "e": "AQAB",
      "x5c": [
        "MIIC/TCCAeWgAwIBAgIIReLBDIrfwFowDQYJKoZIhvcNAQELBQAwLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDAeFw0yNDA5MTkwMTMzMjNaFw0yOTA5MTkwMTMzMjNaMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCNeaRLVr+Br9tre2OchUP7vlWGSzMJjQumG9GUojvsfm8MvubA5PlG9bhxNI71V342C1SqOVRx/WvAGP2Fuu1DA4fViNQBdKpuYgPC1j8Zjo2i+zaggMAf4xlpXYUBAQaT8AYOjJL5hYpmQBtW69nC43PqfjcxX1vHkQIwwYwkHMOR9/QDFu3t48VIEWnitA+LrUwQ6x4StGKsDaJ4wpMJYhGvmL9gFx5JHxlIQvHRJVoqc2lIEHPR9fEqtzGbXZjflprtvOJlM9ahlLuApkxE3t/HVEhhd2etFNqdnW5eqkeLRzXRds13brK9tuDwG+aqjWBdJbpdHANkxVEyK31nAgMBAAGjITAfMB0GA1UdDgQWBBTGfJHI1dcHxyfHQq+NppsvRQeVRjANBgkqhkiG9w0BAQsFAAOCAQEAa3Fsadx1Od7qnlXAW3V66iESJTNrzIgMXYfqCJjCy4Ty3TSWCC4DWC7EppvDPRzGjELC4kH+zhnk80U8Zj549URuZz3ut+6CdcnGJGwZEut6NKMi565h5Sm7r6BNMI9Rlz/7HYYdeP7PS2+okJf64J9CCpCjD1zGpg04QMelhHVUilkPok2B8LbxoFqkaJV6OWafLoZxPtTqKPFAxIq4HfP1+1VeED7VFkNbNmFo4Eq0jcRIHGWrX9msPL3fQXwNg8OVm2jPxWRVhpZ7zKqCKaoSbN9YbAgYsXwRSoycjCwxp7ZXUiTUOYKQNIN0KCPdKjGOAFGy0VOpxmu+NfYZaw=="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "3PaK4EfyBNQu3CtjYsa3YmhQ5E0",
      "x5t": "3PaK4EfyBNQu3CtjYsa3YmhQ5E0",
      "n": "iK9_aSUvnRV4zRKEpHK70hPNb04RBDGI5Cni7I1BGWobwH5jsek1xQ8k-7w6_qtxvBpiOi_oPLG11etjhLRTS2HFkKSLxqPIt-86sEIKbfVG1TxeLrwg5fVTiReyPKIDd0tvFFEvHc6bjGZFHZ_EvDfxPExepjaDopCYLJw6S8xFSCp9QlbKnjLLUoyIBapWeQ-tFK4MilQe7aZnssQR1vTuO-R1-zx5KQaaDzs_XbZUp7qpCsCuXoq3boZJEM3E5eZDYgVYBniDCQb1wp5JluYx78fweMYxSVRVB253PCu77ex0diPltJFte_B0FnvwARPMPzO6LGC2Jc71XTUQ0Q",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAILi1z2L/f5YMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQwOTI2MTkyNzI3WhcNMjkwOTI2MTkyNzI3WjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiK9/aSUvnRV4zRKEpHK70hPNb04RBDGI5Cni7I1BGWobwH5jsek1xQ8k+7w6/qtxvBpiOi/oPLG11etjhLRTS2HFkKSLxqPIt+86sEIKbfVG1TxeLrwg5fVTiReyPKIDd0tvFFEvHc6bjGZFHZ/EvDfxPExepjaDopCYLJw6S8xFSCp9QlbKnjLLUoyIBapWeQ+tFK4MilQe7aZnssQR1vTuO+R1+zx5KQaaDzs/XbZUp7qpCsCuXoq3boZJEM3E5eZDYgVYBniDCQb1wp5JluYx78fweMYxSVRVB253PCu77ex0diPltJFte/B0FnvwARPMPzO6LGC2Jc71XTUQ0QIDAQABoyEwHzAdBgNVHQ4EFgQUYhedQ9z69v89gqGLjg3axhZbdXQwDQYJKoZIhvcNAQELBQADggEBAEvVdYEokUB9BA7Z1RRU2XpiF/aNbUdXwCCYIQvHqW3++tLI4VvreEq0OUNBiZge7WwZODHHDEzi/Q4XTqPgknIQZHKCPjuqo3r2AXXDRwctBTazUgnv3ZEfkeMjLGW0LY17sX16Rzh4HVKJiCxmEkpPqvb+fjAgyqE29rO8w52ni1hRiGj0i9Ky3lt1lpMNQVgItiZWV95XUQT2icqm5jxwe1FOoFl1YxnyGSDD/uLnkFCVoPHN+sG+V9h0HiM1SF4VWAcuTbH8w/MVf8JCYINCFMqYhOSLKOFa+zQL+75sbygL6PEKS8tB1As9tTho4GBQNRCJV1RznBTVU7hoiTw="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "k8kbXTgyy1QKJ54n61Qg3OldE_E",
      "x5t": "k8kbXTgyy1QKJ54n61Qg3OldE_E",
      "n": "h_kAU8cexNSxHmYxYGO9oP6H0HvH5UyCZt7DqeTA4YYUcHBh9rr6aOXksZ_NFrs1edk7CYk_zWZrMa6we6vXPSOTI151MhdFuF3JnEWnvvjmUHs1WfIGkNg6sFNVcgjuKvItIyCEo2dKNjmAYyd8RkwgQR4BxM49YyvzWflQ-sOxcUbhsF0ADK9RShTGDtOycErkX7r1nEjO5pqxWZ9jmMC_-rQmXYgNWthZaT-gHp0h8x3udQSFbiU4lXH_Dy5HPhGOR_WMN8h50ZccfkNtcWA2RSnUbH-C_9y0rgC3VFxSV-7_LMp_xvxN4-k6hQHBhQff7caD6M2FADQIUZxHMw",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAO3kNnTwwrBnMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQxMDEyMTQzMjUzWhcNMjkxMDEyMTQzMjUzWjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh/kAU8cexNSxHmYxYGO9oP6H0HvH5UyCZt7DqeTA4YYUcHBh9rr6aOXksZ/NFrs1edk7CYk/zWZrMa6we6vXPSOTI151MhdFuF3JnEWnvvjmUHs1WfIGkNg6sFNVcgjuKvItIyCEo2dKNjmAYyd8RkwgQR4BxM49YyvzWflQ+sOxcUbhsF0ADK9RShTGDtOycErkX7r1nEjO5pqxWZ9jmMC/+rQmXYgNWthZaT+gHp0h8x3udQSFbiU4lXH/Dy5HPhGOR/WMN8h50ZccfkNtcWA2RSnUbH+C/9y0rgC3VFxSV+7/LMp/xvxN4+k6hQHBhQff7caD6M2FADQIUZxHMwIDAQABoyEwHzAdBgNVHQ4EFgQUWyYil72oqIk8hpc+5oFw8PayL5gwDQYJKoZIhvcNAQELBQADggEBAAi/sKMwnC8jV2qSBZaqdxXgQDGMaa8fiIY9u1A9Kll5ec5PdeP130WJqvtW6OnvHjlPoxvfcdgafupCjLjxq2uMjgDusJ1XdylPUuFarUCIgoaj3Ze0HP5x0ojxmD5j5PsStkz8AzWy2/wXxCVLyoQI+OHs7uaqZaSBwqndEfduhIOVW/llIcKEz/4g1OhCU0MbR8OY1ty7tF8oNfhpSRuGmnqsxwFyYQOryHiej/CJAdjeEvD/snkea+CyN6hAE/DZsmf4KgX/4zF2/NDcbqqI8lTt9Fxllrvcg+c5zxs1VZGflsotFeoLBuug3x/AIY+P+wSWdVXBpJJ9iuzd/no="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "d-Zi0Gbus4sEaOqXgU8pMvYc3KI",
      "x5t": "d-Zi0Gbus4sEaOqXgU8pMvYc3KI",
      "n": "tZkObytQ39ThlVBWSLN6MXaCWNBXWuXLbeZWibiBcy0-jofuTmdqek9yVOMxAx9R7N5DeUcrgjgVnSvmbAmhJ0AHA9HW8UE8g7VvN3prCzCPen5eE4biDViOe9DvLznrt5GM4jpzgiDelfiLKnH2kW9zliyKaEjn1LUqU82WTeBk1uT3rvP5n1kifbNsvhTxV3P3oNKREHaWyrfJ96tL2mNvwh2c1-BOkO4AAjKuuXoiwS19_biEtFyaQ3XvNLZTx1aG_8Mc0dEj9eTg3ia-2B_fIWTVeAUzPA670ykdNED9NsmzCy0sAmWDXfnjChbu8YMW-dYmgoh8MvvsCdsDQw",
      "e": "AQAB",
      "x5c": [
        "MIIC6TCCAdGgAwIBAgIIQtu9WGiou1kwDQYJKoZIhvcNAQELBQAwIzEhMB8GA1UEAxMYbG9naW4ubWljcm9zb2Z0b25saW5lLnVzMB4XDTI0MTAwNjE2MDExMloXDTI5MTAwNjE2MDExMlowIzEhMB8GA1UEAxMYbG9naW4ubWljcm9zb2Z0b25saW5lLnVzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtZkObytQ39ThlVBWSLN6MXaCWNBXWuXLbeZWibiBcy0+jofuTmdqek9yVOMxAx9R7N5DeUcrgjgVnSvmbAmhJ0AHA9HW8UE8g7VvN3prCzCPen5eE4biDViOe9DvLznrt5GM4jpzgiDelfiLKnH2kW9zliyKaEjn1LUqU82WTeBk1uT3rvP5n1kifbNsvhTxV3P3oNKREHaWyrfJ96tL2mNvwh2c1+BOkO4AAjKuuXoiwS19/biEtFyaQ3XvNLZTx1aG/8Mc0dEj9eTg3ia+2B/fIWTVeAUzPA670ykdNED9NsmzCy0sAmWDXfnjChbu8YMW+dYmgoh8MvvsCdsDQwIDAQABoyEwHzAdBgNVHQ4EFgQUxK9pMRYiunOnrWN+7pbNhquErekwDQYJKoZIhvcNAQELBQADggEBAArSZE+TXoQG51pGET8bwRO5PprSURDhXKKoktnPwhXlUBI+RGQSXnpEZydH74Q6Lsi6EylqVozZ6j5kzbvDQk19+uXQsKyZ++eOyBRcQuzsiO5H7YgPjUk6OHiEjLk4eMt/rXH2NZVKpO2P1A8yOJSz9RV0+4G2u8JbhAeOBmr5VKwnfwE8hGWk6ggVYXl6kW8p37iubvkUBotZpXepMBTKtCgRlSmSd+saH9LmXdLr4xU7c3bbcFjKITXK/gS6xpsex/P/oQKXch7VCTJBuoq8UDQjDvRNXfALlZLlPEKQN7WYmdi6ofFBRxUM8022UW8u/sf8Xco+rop3A0lBWec="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    }
  ]
}
