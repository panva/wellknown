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
      "kid": "ikjwRrjZPR58a_wQxUzpzGuUN4s",
      "x5t": "ikjwRrjZPR58a_wQxUzpzGuUN4s",
      "n": "iNY-IMMG5jMm8E9O80Vh2BKU0pG1v1yK6Z9tM5IPgftDwBCPYpxmrEPO6Qxq45EstozJQTIHR5c6pVWuJmCLlBqhJ965ocmnB9fYwpw8MXmfR64ntV8VXXnSFmsyHwOFEk86jp908fCCbv8xC67LTaWx-M9QPWSygLrct6dVXxYg-o737j5qbngAt21fUotUZEmEQSE4I1a8RZYibvCFhlygP7_ZUnT7cJ3SdNpYv0JA74rvG3AAnexRRzYBbe9uoZph5RMZiYJ0wriM5ZFdL9Yj4JT2lBexmMDkBVsycHMgoy-u9opRl-oQEisLiw5wChvcpdAVcfAH0vkvitqMDw",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAKVXz6Gf7BgeMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQwODI2MDEwMzMyWhcNMjkwODI2MDEwMzMyWjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiNY+IMMG5jMm8E9O80Vh2BKU0pG1v1yK6Z9tM5IPgftDwBCPYpxmrEPO6Qxq45EstozJQTIHR5c6pVWuJmCLlBqhJ965ocmnB9fYwpw8MXmfR64ntV8VXXnSFmsyHwOFEk86jp908fCCbv8xC67LTaWx+M9QPWSygLrct6dVXxYg+o737j5qbngAt21fUotUZEmEQSE4I1a8RZYibvCFhlygP7/ZUnT7cJ3SdNpYv0JA74rvG3AAnexRRzYBbe9uoZph5RMZiYJ0wriM5ZFdL9Yj4JT2lBexmMDkBVsycHMgoy+u9opRl+oQEisLiw5wChvcpdAVcfAH0vkvitqMDwIDAQABoyEwHzAdBgNVHQ4EFgQU3DJAB//U4mbUk9yjGXVS78nDJ2AwDQYJKoZIhvcNAQELBQADggEBAC8yTxRztDM7dZ6Gq38L4U11fw50Lo2u8Us0FeWSoE/QPNsFI4E/H/hLCmiHzzALq3PSLk+YlKzNtCg471Hvb49Z8xI8+XOp2ahbKHY133ntKbmJ+LXm5p9uYuNJNx6AwllO+f8T5I1gu8PBwh/JqPZxUie/iAjWvOz0j+tBBoYKPn9XThECW9MsuOaYtYUuchTC7cdrDi57vq3SmZh+ixq2P6h5yeB6y1xCCIHEn10DoP1zUgxDGhqlfrRANiiaa6QIyPqz8TWUnyymjLCLuuINgiFc6VvLKMWMbNupUwt4jkw1hFBGi/rkHPJrz2VGgMIcTMer6skwTfzfIyMc20o="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
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
      "kid": "8PXQDb4mOmolu_BtG3jDX4qR2xU",
      "x5t": "8PXQDb4mOmolu_BtG3jDX4qR2xU",
      "n": "u_iIbUtkW6-frJg4yMeZeOAbJhcBRq_j2iQiV16gf60v9G9CRHwtIizdKhGw8KYVMVxfGtx07UMgkUI0hKqo-2J19nHCaQmpR-wYiqLMOOmvqIeg9KFMqD1zAKGxEP9Gjqsnqp6BTTOD6WuhNuii1Wn-wpbX9QhgZpTA1WjFF4arqBZRzpMf8thAUz-_yzpG19tWngIlYIfh9KY8LM-1enEap7YqceUa51slm0EW0YH8xEOCYBh6QWce2tS6nnfQqLtQ7hvyCiKqDAGVjsPr5egRKmlW-vNZe3rxdfsNPG2U8buNSITAL8NvZ4wr0IlOu4hioXwHQNu8Zl1NT92AmQ",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJAN34Zk+WFyl5MA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDA5MTkxNjAxMjhaFw0yOTA5MTkxNjAxMjhaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALv4iG1LZFuvn6yYOMjHmXjgGyYXAUav49okIldeoH+tL/RvQkR8LSIs3SoRsPCmFTFcXxrcdO1DIJFCNISqqPtidfZxwmkJqUfsGIqizDjpr6iHoPShTKg9cwChsRD/Ro6rJ6qegU0zg+lroTbootVp/sKW1/UIYGaUwNVoxReGq6gWUc6TH/LYQFM/v8s6RtfbVp4CJWCH4fSmPCzPtXpxGqe2KnHlGudbJZtBFtGB/MRDgmAYekFnHtrUup530Ki7UO4b8goiqgwBlY7D6+XoESppVvrzWXt68XX7DTxtlPG7jUiEwC/Db2eMK9CJTruIYqF8B0DbvGZdTU/dgJkCAwEAAaMhMB8wHQYDVR0OBBYEFPsAiuw2/6blUobKdDY7OswxkvLOMA0GCSqGSIb3DQEBCwUAA4IBAQCxtoO7uI7POppABzjbKnXumTXLlUDlphvpoHjsYIXfAzvL74/mjXgEFhRi0VBQlkFNTJuw8XUASgpwrJV1MGLE0rLUoc7VuD2+ms/u7qeL+K6/5Iz3lrAFaRnsRddUk0ZstA/50ZKIgZGf4q64dYyAz3YFQyByA1Zgu1TL+VGTFjcGkTzqLiqhSQP+cX9Ct9O2Q6gvyu+tPPrMemdHY+T8KzWDUQNcLcLFKj982JoiYj59hkIKS1qyibiVkslMi5DCWBK4pjDZLDe5VmhZ+LaLg+QrO4uATl+BCJkfl1C/Oc/p3OKK34Kz44lSX10+kJp5HsTnvP1qZCqiTdUJ9W9i"
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
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "iE89_EVhreMiV2-8rKE2zWBUm3M",
      "x5t": "iE89_EVhreMiV2-8rKE2zWBUm3M",
      "n": "rPcG_cLtwxXl7JjuuFKE54HbStF4ZFawCq8qQ_EVL9z_8OjMbOhSZmcG6DQ22pb8yndFjw5g8XIa9TfDnM1_G36qqPcOQNhK3xGKi6gQN5N5cs1SMQ80-FFJP6lmPlHfFG5fsNuTpIYAor8LyEJZDx3GtVWLWeohdQom3W8-riMhVlSX6k_PLcqH0ZJVlFf16CfyOA-NRSF0L6Ic-SqNeMSrxDcwqlYPZX9mLMatq2GQmjIH0VzD9UL23536I8ZnffXlFjMYLPy2GlUSe5RgPhExFqpXlPsl8a7D-dziVBSI013MCaAOCG_ye2qk59RzYTUGkSHWzwCTiBcFd8x0DQ",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQAp9IJFjRkJc7TxCBUAueWDANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwOTI5MTgzMjA5WhcNMjkwOTI5MTgzMjA5WjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCs9wb9wu3DFeXsmO64UoTngdtK0XhkVrAKrypD8RUv3P/w6Mxs6FJmZwboNDbalvzKd0WPDmDxchr1N8OczX8bfqqo9w5A2ErfEYqLqBA3k3lyzVIxDzT4UUk/qWY+Ud8Ubl+w25OkhgCivwvIQlkPHca1VYtZ6iF1Cibdbz6uIyFWVJfqT88tyofRklWUV/XoJ/I4D41FIXQvohz5Ko14xKvENzCqVg9lf2Ysxq2rYZCaMgfRXMP1Qvbfnfojxmd99eUWMxgs/LYaVRJ7lGA+ETEWqleU+yXxrsP53OJUFIjTXcwJoA4Ib/J7aqTn1HNhNQaRIdbPAJOIFwV3zHQNAgMBAAGjLjAsMB0GA1UdDgQWBBSt34omVGOWZWiC1gQCmSJHCcANtjALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBADfQ+F2MBUTMD1Zl2aYG3X809WOWJrTm1gk+QSASop2pb26fhRzgbsetWzoCfGIUZd4XmZIRJ5hmXgme638ift6tT14Hsk0Won1tLds1kC2/lRQJcmuF3EYCr9hn0PzH92EfPMJhIboNt1NfyHqTMr0dFtsDynxXTR1bgJjZ86oCEsP28j2MN88xaXEZ1PlFXPH+bHpiAbQ8gGHGR5/wRkdKLnJhPBGR7+paIgR1Zexvjr6WmaAUrb/S3Amm/ryF9rZqq1HrIHQcQetyXEZ9e1WyBhl/Lwn2seQSpBwlc77kS3dOYBq5SqSLLqFpXSbNK4e/Vk+X7Qe1ZbBwDnUJ73s="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "JtFIBUJIB08c2tNR1DqBd0a_RjY",
      "x5t": "JtFIBUJIB08c2tNR1DqBd0a_RjY",
      "n": "pmnhm5-9BOeKq7nYPzhDuOX48nV3UAwWcBDND9w8PvsdVV-NTHTZW9qrtclMQKTfHw-lVRphp7B9-dETmWRw8YotVHy1g--qYYnV5sBaC3B2bm1OTXb6tB9oUOY46xIwdmLo51VD7hAY7JanmJzI-O26MDzcsvMU8hwwgu3qFEwjgfro0iilCcO1xtbCH9KgSw7h_SCNwPLNiQR_-Lb-7ClQIVsLovmycYuFzrCdUfqzyiAygv5mK1NQlN-K-PhbGCj53DeYOIsEO-85tJ9D0HXRfMjx9bX7-ea-MgJ0DIkRjN2PQSgp7iGr_qRzf9_zraD9TAiQ7LSUIiqrIG-SWw",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQYtDDO659pgc61M2Kh9dKWTANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwOTE2MjAwNDE2WhcNMjkwOTE2MjAwNDE2WjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCmaeGbn70E54qrudg/OEO45fjydXdQDBZwEM0P3Dw++x1VX41MdNlb2qu1yUxApN8fD6VVGmGnsH350ROZZHDxii1UfLWD76phidXmwFoLcHZubU5Ndvq0H2hQ5jjrEjB2YujnVUPuEBjslqeYnMj47bowPNyy8xTyHDCC7eoUTCOB+ujSKKUJw7XG1sIf0qBLDuH9II3A8s2JBH/4tv7sKVAhWwui+bJxi4XOsJ1R+rPKIDKC/mYrU1CU34r4+FsYKPncN5g4iwQ77zm0n0PQddF8yPH1tfv55r4yAnQMiRGM3Y9BKCnuIav+pHN/3/OtoP1MCJDstJQiKqsgb5JbAgMBAAGjLjAsMB0GA1UdDgQWBBRGUApmo+D1ahrYm0/7V3cSny7/WzALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBAI/2UBkrZj/5XCI1AwsiVWlScLpT9hhbpAPUjgX8Ge5DqFfekY+x02RvLtsGB5s0apzupvTH5XQRuJDKha++uMGyz8OfsuLUTLklYqiIk+O+V3qqbsprNyd6TjnEcaohe7391cq2IZ0ZPHGpZdNYVGPfeD5LT6ET0+B9CQao7ZneawWzI2J5vYGjA1nMh/i0st7LaNHuXuGS+VIiTTGhFeS03TeziBfYacTZUzFkz9Cwc/PP/kh2kl58H0xYy34UzbE+qmCm8Yic8aj6Y5l7iETndltQWc1xFqyEfHNWPTDjRFe5NkWbYiLyTMRKtuwDR+xkRHDNT0YprECPWDbHBGg="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "XW3qzIacB89ScKvjd8joko2mIeY",
      "x5t": "XW3qzIacB89ScKvjd8joko2mIeY",
      "n": "w98wQcXQyef-8_8r13WM_jIavbp198CVpkW-VFc6iyEHR4RlyYrr2GxwuBmQPdWvDyGyXbTvYexCLsVE2oTzHvEZGTiRT5Xz14W0YRcZQrYYVr848dR50i1iGH4lyNDoJzk9FK5M3YMmZkwHP0Sn5Ok9JkAUUOJ8MVFcfeCStwchi61kGeGB54RHsb-v4rmBtwz21yaI-7JmKITPp3zo-SaDaIns636a8xcm8faLc9kjfy58kH8K7PNFtCbltXg_QZTr6INh6a1oSPdMcZvVlhrz6uXGmbbAjyyrSYndDsO36XKnS1-5yiwOpkXmsk0Qmzyf7Ru3i4sG3AoFSPNlww",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQGpJpkhstfURjclcuIALcFjANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwOTA0MDAwNDEyWhcNMjkwOTA0MDAwNDEyWjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDD3zBBxdDJ5/7z/yvXdYz+Mhq9unX3wJWmRb5UVzqLIQdHhGXJiuvYbHC4GZA91a8PIbJdtO9h7EIuxUTahPMe8RkZOJFPlfPXhbRhFxlCthhWvzjx1HnSLWIYfiXI0OgnOT0UrkzdgyZmTAc/RKfk6T0mQBRQ4nwxUVx94JK3ByGLrWQZ4YHnhEexv6/iuYG3DPbXJoj7smYohM+nfOj5JoNoiezrfprzFybx9otz2SN/LnyQfwrs80W0JuW1eD9BlOvog2HprWhI90xxm9WWGvPq5caZtsCPLKtJid0Ow7fpcqdLX7nKLA6mReayTRCbPJ/tG7eLiwbcCgVI82XDAgMBAAGjLjAsMB0GA1UdDgQWBBQOLDJqh3DNQNFk5Ug2tinYkvkVLTALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBAJsHE07v0CN4SJUFzMXj3qjdSJJyMh5oAtYO9davBDqdGdNshhl2/ITATViZv3t4t1+sypbl9T3MaNV3LFC6liGlUKtPh32uvLT4464arowdL7p4N/uNXr6pms3auEjctl1sZaoONWgvrVZ5RN03KhnrdcayBywk5Vr0NZGP60QngFz+/8jqyEmppzfgwF5VrxcDxjfH/ZjB1eQgW3p9RyF/K43qWWDt8SuRJCJ5UP4KvCGs5bZjTn4FmnnTmUj/IsweA7a8XRchxy4xyyUPvujlbXl8OomWrE4klQpT+by5i9X01doeVXjlrnBQbZOOn5bZJqWry3C86M0Tmel5k0g="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    }
  ]
}
