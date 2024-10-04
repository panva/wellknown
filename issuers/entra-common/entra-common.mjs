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
      "kid": "gk9HoGWCmYELUq1REQ0CkHg-RsY",
      "x5t": "gk9HoGWCmYELUq1REQ0CkHg-RsY",
      "n": "hrwD6DuevRO5LfmAgYKrxQopYCCoAwsRvWpbbhC_yyd5IJtZKxmqzq1JV55WfKPogux9OPkAN1qEEZhC-fFiMTpTT_DK2G88LGQGT8SC-SetTQvAX4mUhlk_yeMBqgKCAV3FHhqpun_WgLtGL2kxbuQtKu-VwVlYUDlKlwg72Ae_vmRCRgJEJ2RJKwdQTcjyU1Kq6fXc16c5kxSogpAWVd25xlrrD-G9QunAuIFXgYQZfWGQT9bWhDci9-8HBy7qorN33erPMprRoVAeM_NZoRhsjS20vswkEBtZkh2aJRIyelR2eB_i1RISlBxdDTNKGC4Bfz1Lz87es1Qzu7kCCw",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJAMqOgGVZc4l9MA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDA5MDMxNjAwNThaFw0yOTA5MDMxNjAwNThaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAIa8A+g7nr0TuS35gIGCq8UKKWAgqAMLEb1qW24Qv8sneSCbWSsZqs6tSVeeVnyj6ILsfTj5ADdahBGYQvnxYjE6U0/wythvPCxkBk/EgvknrU0LwF+JlIZZP8njAaoCggFdxR4aqbp/1oC7Ri9pMW7kLSrvlcFZWFA5SpcIO9gHv75kQkYCRCdkSSsHUE3I8lNSqun13NenOZMUqIKQFlXducZa6w/hvULpwLiBV4GEGX1hkE/W1oQ3IvfvBwcu6qKzd93qzzKa0aFQHjPzWaEYbI0ttL7MJBAbWZIdmiUSMnpUdngf4tUSEpQcXQ0zShguAX89S8/O3rNUM7u5AgsCAwEAAaMhMB8wHQYDVR0OBBYEFDnv9mgNtwLVbyXPFUaRjdCsoFZ7MA0GCSqGSIb3DQEBCwUAA4IBAQBvSuzBwQWhRCc0BQ+ivfrlBuv/1Ir9EASCDz7xKLjoqKe2lbLDJ4VcaisjfaVc8UGGiEXL6nlHsPVzQCcccIgJ6jJJkBauhCytzYcpI4UYy0mwvxlCaBcoBOj3n3lBHdCT2d8BvOvodSMXUr5HwWEmYZYs2gH2Dcyy5qzP03jJ14a2ct9wGJxN1qMkZJVfp7FOtHTxpOe2IQ1tx8jUonw9lbF/MKhQSy7lx/BvGMHpVM1ND33+AtWPuArWogo397a8NAiRoq45CdYRuPiD7Em1eZJkUeLFoLubsNdZEH8INC48d0QLCtdIM0bf1A0ZVMg6/nD6wHRFz37DBK9qE9dj"
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
