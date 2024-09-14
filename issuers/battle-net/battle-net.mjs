export const metadata = {
  "issuer": "https://oauth.battle.net",
  "authorization_endpoint": "https://oauth.battle.net/authorize",
  "end_session_endpoint": "https://oauth.battle.net/logout",
  "token_endpoint": "https://oauth.battle.net/token",
  "jwks_uri": "https://oauth.battle.net/jwks/certs",
  "revocation_endpoint": "https://oauth.battle.net/revoke",
  "introspection_endpoint": "https://oauth.battle.net/v2/check_token",
  "userinfo_endpoint": "https://oauth.battle.net/userinfo",
  "device_authorization_endpoint": "https://oauth.battle.net/device/code",
  "response_types_supported": [
    "code",
    "code id_token",
    "id_token",
    "token id_token"
  ],
  "subject_types_supported": [
    "public",
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "grant_types_supported": [
    "authorization_code",
    "client_credentials",
    "implicit",
    "token_extension",
    "server_sso",
    "client_sso",
    "device_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
    "urn:ietf:params:oauth:grant-type:token-exchange"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "d7828726-256a-415f-b337-d6139fa8bd49",
      "alg": "RS256",
      "n": "ALuT91mZ4Ine1rWXRXEiTOjUpKf7bOlGE5L0KieIfj5n5wByorstsRlI2yq5GwngjIWgxl2dwAIBWKNtPTbCLjUarEoU6tjh1qcNXAO4K5qAQEieWUpeLNeviIMR/hBtLqs1WAQXmVEclMeKOxTmi2fltP+Y62LlZE83uSfZmKQE81IQMRWBAgrESMNZZH1RWdWnnzTpGXYvtCpOf16xAKKwIzacMvqqCIDdGsq6l8wfn0HA9CpLDhzZxXUbIBkFL6qz7BN9m0Eb1h4AOqJkaBa60ZrYhjl64EgYJcfOPoOqnU3pmu9rRiMqt4PptWDMCUyJVkO9QpoQ4s2vhFP9FCM="
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "4ccec5815bc0779dc36e7a895fb42b3e4205a894ad85b023e81acc3fd1718fa4",
      "alg": "RS256",
      "n": "ALI7m99+OTGF6XqLSq/8eaWKbmPevIZQOEVS2mf7Qow0Ynus7qwqsL+w9ZbKjaIWfIKOE2V4lU0Dfj7sHSxpomfFv5Ck5/B5J/RzWywraiXeVISc0CY9UpNfgwRhLKTD5rarU0Db2BS58KpfRWHdXCHiANPn1aGLEhCUZE072YFY51Dyr2dQRrqaAPzyB125hYf67XS0u0JISHURsHe0I6P6Dk9wY5z3aH+EGalWzyQfgWRxgqI7Wgp1BcCWOx9xVHaJNFlDmtiOMQ4mGA1B8xBCwQ1Dgd0Tb01rBX/8T4B514AKowsbCbK2yYHoEe9z9s4zZEYFP61YO1DLenOktE0="
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "ff6caf4f-ac04-4333-ab3c-cfc8f4d6a4d9",
      "alg": "RS256",
      "n": "AK4yDHJh+TzgtXtP5XFS8PnbV9ugWaBOG60l8doxp8HEkVRPJhxZHorxNKgWsOR0CxjSXUH/CkaIZJm+XVXQSmtge9zJSStoTPmOm8oQuytjJr5aPJc3xBwTKfmO6mZTvJsFWTGNqkZOZWEN/bSwlI6kvIVcvdNtzBtabUjzKo6dKbnId5inZf9Oyx8LFjx9ZJgDC6l4KVr7+UMG635jbH415MKRU0hrBG0FuSTrhDobxge0eQ43ArHQUA4g+sOh3QLwqd5b831/IeoCxsPYcVMMGXXPhw2zAirPjGddyZIsiBofc8GCDfWvfkWv6zpNvZQOMYEqzhsJoMNBsWhe1X8="
    }
  ]
}
