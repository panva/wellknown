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
      "kid": "H9nj5AOSswMphg1SFx7jaV-lB9w",
      "x5t": "H9nj5AOSswMphg1SFx7jaV-lB9w",
      "n": "iheTlbqieo0KzaFBTz6dxt9LAENfe2d0ywnpvZx9khzurtApc4ThWBpeoTBI6UpReeCwyW6DQjJSGCqHwe-wqRdgoiMc0PV-danrh0px38x2KL_j7VoHR0hlQBYOpp5GBMdz-Nsc80wBtHAqxz7Nno3qYNTXUvwZ2LSbbvgoPXrh0zhLlSrn2gAroRv6Z8xSOVg3CSmZeVgZHJv4aMYQiBiIIZW68YN5ywHxOf6-LdrhqN24NPSLYUNPKGxCkUkWg-VV-iulUqIkDxn3SKiX4zVA-jevbuUrsK3MeRHoJLqXMf8KnpPkf4ZLCTLdUNFyLyxFvqnm6QUAgpDrQ_rxhw",
      "e": "AQAB",
      "x5c": [
        "MIIC/jCCAeagAwIBAgIJAJjMBdn72zEjMA0GCSqGSIb3DQEBCwUAMC0xKzApBgNVBAMTImFjY291bnRzLmFjY2Vzc2NvbnRyb2wud2luZG93cy5uZXQwHhcNMjQwODE4MTkzMzIzWhcNMjkwODE4MTkzMzIzWjAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiheTlbqieo0KzaFBTz6dxt9LAENfe2d0ywnpvZx9khzurtApc4ThWBpeoTBI6UpReeCwyW6DQjJSGCqHwe+wqRdgoiMc0PV+danrh0px38x2KL/j7VoHR0hlQBYOpp5GBMdz+Nsc80wBtHAqxz7Nno3qYNTXUvwZ2LSbbvgoPXrh0zhLlSrn2gAroRv6Z8xSOVg3CSmZeVgZHJv4aMYQiBiIIZW68YN5ywHxOf6+LdrhqN24NPSLYUNPKGxCkUkWg+VV+iulUqIkDxn3SKiX4zVA+jevbuUrsK3MeRHoJLqXMf8KnpPkf4ZLCTLdUNFyLyxFvqnm6QUAgpDrQ/rxhwIDAQABoyEwHzAdBgNVHQ4EFgQUVOgUL8kBykezhhopW+Whb6mtqhowDQYJKoZIhvcNAQELBQADggEBAHqgxwjA+D7HzUT5mNRf8uizC9SkHdLXULyZTehFbSYEB3SYXZIbUWJcd88uaDUZ7CxPaojg6swmuB9XnzcZh8Gpa5y1ThSWvmPvUIDq1e03OJzhsC6dPmwoysmLvovngkGJ/AWURK7zRot53DLYWt0d/0KPDExPsovava0LeQjU8bLxHwQ9+8JFFxoN/aE85TQc8Whw+xZ4NX6BdTiucY8ku0smJLblwWui+mGyFSfDFW9r/r8LMUifgXTkaLYz4Z7sQdPFsdSoAR2jOzKhiz6acyQ1R4QUheN0EBmuPSsbu9M+E6tSYD+4q3GmQWtXjVagJoKPos0DIhe785YZjtI="
      ],
      "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0"
    },
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
      "kid": "J0OuLdKE1SgPdo4vd-sUXxu2dRs",
      "x5t": "J0OuLdKE1SgPdo4vd-sUXxu2dRs",
      "n": "s08iWRspp--bIw3ODHbu_CTnh31qvHfeUqIBwvyaf2bJKD0MroKkcOepOdFXcYqmDQ-rH9wdPevJdhFS4KyxcMxiFhxEVqte60sOiYjqkq_0GMscnV6qt5bS_dJd24OZ7JlCn42Rk5cV8OJX8mT_qZQc09UoB68CTACjB1BiqR-2TzFpCY4N3YoVxbEaTz5Hhx6D2OCxaSOuCR1egjIIA-ySiDiFUY8UT7hqsE7BX5g-UMI8Ac6MT-VYXy4UczmSOa8dMucCFNUtJVsXo7l8rIGM2nJm8HtnrDKOBJLFT1ih6iBGSvTg_ul3qCdnMXuSzigKlSCJG4EESMnZROggMQ",
      "e": "AQAB",
      "x5c": [
        "MIIC6jCCAdKgAwIBAgIJALyg9txs6uV7MA0GCSqGSIb3DQEBCwUAMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czAeFw0yNDA4MTgxNjAxMDRaFw0yOTA4MTgxNjAxMDRaMCMxITAfBgNVBAMTGGxvZ2luLm1pY3Jvc29mdG9ubGluZS51czCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALNPIlkbKafvmyMNzgx27vwk54d9arx33lKiAcL8mn9mySg9DK6CpHDnqTnRV3GKpg0Pqx/cHT3ryXYRUuCssXDMYhYcRFarXutLDomI6pKv9BjLHJ1eqreW0v3SXduDmeyZQp+NkZOXFfDiV/Jk/6mUHNPVKAevAkwAowdQYqkftk8xaQmODd2KFcWxGk8+R4ceg9jgsWkjrgkdXoIyCAPskog4hVGPFE+4arBOwV+YPlDCPAHOjE/lWF8uFHM5kjmvHTLnAhTVLSVbF6O5fKyBjNpyZvB7Z6wyjgSSxU9YoeogRkr04P7pd6gnZzF7ks4oCpUgiRuBBEjJ2UToIDECAwEAAaMhMB8wHQYDVR0OBBYEFFtQ8lowKfYv441NLn+BptKjY/19MA0GCSqGSIb3DQEBCwUAA4IBAQA1ioJRoq9pbmpM6lPevl1a9fT+xlTt6ZE1OjuOzZwcqSvBYrFZ4eq4/HCmofY3qPcNuBEoTyTo5N3dHldrw32QEpoG56BhXCj+Gnd4+szTPOXTWbmslQKfbIUn0RYEGp1ayRhnO5mweNK7qTGIC4PCvPS1scP3CdTlpsbJe65CrL9I2yNbR/ehat/RJw9zQdMiy8/xKvIVK3/fKiIiSfI00L+xSFWpow38dpL+5/8ND+OM5Jj+FiRQ+LLKjZEHhCRr0Io4Cn7saIKmDv1WghpkY5z4x9Gdi0lxNmmejuU3kJofk3UqS8kW/ajAwoELr8c8Bd6kR08BT279cDEY8FVL"
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
      "kid": "XW3qzIacB89ScKvjd8joko2mIeY",
      "x5t": "XW3qzIacB89ScKvjd8joko2mIeY",
      "n": "w98wQcXQyef-8_8r13WM_jIavbp198CVpkW-VFc6iyEHR4RlyYrr2GxwuBmQPdWvDyGyXbTvYexCLsVE2oTzHvEZGTiRT5Xz14W0YRcZQrYYVr848dR50i1iGH4lyNDoJzk9FK5M3YMmZkwHP0Sn5Ok9JkAUUOJ8MVFcfeCStwchi61kGeGB54RHsb-v4rmBtwz21yaI-7JmKITPp3zo-SaDaIns636a8xcm8faLc9kjfy58kH8K7PNFtCbltXg_QZTr6INh6a1oSPdMcZvVlhrz6uXGmbbAjyyrSYndDsO36XKnS1-5yiwOpkXmsk0Qmzyf7Ru3i4sG3AoFSPNlww",
      "e": "AQAB",
      "x5c": [
        "MIIDCjCCAfKgAwIBAgIQGpJpkhstfURjclcuIALcFjANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjQwOTA0MDAwNDEyWhcNMjkwOTA0MDAwNDEyWjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDD3zBBxdDJ5/7z/yvXdYz+Mhq9unX3wJWmRb5UVzqLIQdHhGXJiuvYbHC4GZA91a8PIbJdtO9h7EIuxUTahPMe8RkZOJFPlfPXhbRhFxlCthhWvzjx1HnSLWIYfiXI0OgnOT0UrkzdgyZmTAc/RKfk6T0mQBRQ4nwxUVx94JK3ByGLrWQZ4YHnhEexv6/iuYG3DPbXJoj7smYohM+nfOj5JoNoiezrfprzFybx9otz2SN/LnyQfwrs80W0JuW1eD9BlOvog2HprWhI90xxm9WWGvPq5caZtsCPLKtJid0Ow7fpcqdLX7nKLA6mReayTRCbPJ/tG7eLiwbcCgVI82XDAgMBAAGjLjAsMB0GA1UdDgQWBBQOLDJqh3DNQNFk5Ug2tinYkvkVLTALBgNVHQ8EBAMCAsQwDQYJKoZIhvcNAQELBQADggEBAJsHE07v0CN4SJUFzMXj3qjdSJJyMh5oAtYO9davBDqdGdNshhl2/ITATViZv3t4t1+sypbl9T3MaNV3LFC6liGlUKtPh32uvLT4464arowdL7p4N/uNXr6pms3auEjctl1sZaoONWgvrVZ5RN03KhnrdcayBywk5Vr0NZGP60QngFz+/8jqyEmppzfgwF5VrxcDxjfH/ZjB1eQgW3p9RyF/K43qWWDt8SuRJCJ5UP4KvCGs5bZjTn4FmnnTmUj/IsweA7a8XRchxy4xyyUPvujlbXl8OomWrE4klQpT+by5i9X01doeVXjlrnBQbZOOn5bZJqWry3C86M0Tmel5k0g="
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    },
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "wD2fPhT3Zx5dQZrj1068PAbKXbI",
      "x5t": "wD2fPhT3Zx5dQZrj1068PAbKXbI",
      "n": "iL2sYhUxXKukctEAxSW_BEN8vtAA8JvQc2cdebcgu-16nYnBgl23ElRvVhws-MO9jXacz2Q7T9J_QViCOKwgNDQXyZWKHuRD0l7G0NSqv0fpAnG8J-LaVak3ZozKHnyJQ9_CVQHFIya0CHjRI345769gz_8KaQnE0T6By5LqbMJH7FcQIT3m5Nbz6UV_IQtQsWJqU60bNXwatcw80UdJ3y1SLOs6IDkXeJ_7eOxxFDNBqwUQlL5iZaWCpbrLdm7ZnBtRVDaCKdR-s-Fn_EgFcXksBLskBMKPhsm9_1VGIEwaR4srbDq21VlsLDo5_ooE7uTCumn9NT-riJjO0ZMF5w",
      "e": "AQAB",
      "x5c": [
        "MIIDCzCCAfOgAwIBAgIRAJQziCtk0bbvP+hDnNsm23swDQYJKoZIhvcNAQELBQAwKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MB4XDTI0MDgyMjAzMDI0NloXDTI5MDgyMjAzMDI0NlowKTEnMCUGA1UEAxMeTGl2ZSBJRCBTVFMgU2lnbmluZyBQdWJsaWMgS2V5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiL2sYhUxXKukctEAxSW/BEN8vtAA8JvQc2cdebcgu+16nYnBgl23ElRvVhws+MO9jXacz2Q7T9J/QViCOKwgNDQXyZWKHuRD0l7G0NSqv0fpAnG8J+LaVak3ZozKHnyJQ9/CVQHFIya0CHjRI345769gz/8KaQnE0T6By5LqbMJH7FcQIT3m5Nbz6UV/IQtQsWJqU60bNXwatcw80UdJ3y1SLOs6IDkXeJ/7eOxxFDNBqwUQlL5iZaWCpbrLdm7ZnBtRVDaCKdR+s+Fn/EgFcXksBLskBMKPhsm9/1VGIEwaR4srbDq21VlsLDo5/ooE7uTCumn9NT+riJjO0ZMF5wIDAQABoy4wLDAdBgNVHQ4EFgQU8g61bccS++qwRPOIj7U7cwU3yj4wCwYDVR0PBAQDAgLEMA0GCSqGSIb3DQEBCwUAA4IBAQAVLCEvQ2H17T/H+uv53SFkfisbOaJpBoeqqrViuJwv//m54HotkkxkMvtS2Bt7ekUY620djCVuHf4nZkgTdhPq2bU2gMR033Cz8l/kEZlWC7fNmbKzXaj74/s2XB4gCaub2JePCOfcFmavG3GNVAmfs+2Yb1eg45cy2rfVyTXY56zYYYsewAGoKaYrfvu9q0lX4hXO/RHiaJeq5CXZtsCBOjtnkV9trXl4bdBmpC26Nmo+Ca+q3BfbRujj8dOwRDeSFmmrZZ8BXyvJGvwMYcvvv+4WhvwkFOndP4OCP6VLwclrTjhBDsztFr2XpGMMElJdfZO11RTvmtspd2bPJ3ni"
      ],
      "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0"
    }
  ]
}
