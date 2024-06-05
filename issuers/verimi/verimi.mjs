export const metadata = {
  "request_parameter_supported": true,
  "claims_parameter_supported": false,
  "scopes_supported": [
    "offline_access",
    "offline",
    "openid",
    "address",
    "birthdate",
    "email",
    "frequent_travel_route_class_preference",
    "frequent_travel_route_destination",
    "frequent_travel_route_food_preference",
    "frequent_travel_route_language_preference",
    "frequent_travel_route_seat_preference",
    "frequent_travel_route_start",
    "idcard",
    "login",
    "name",
    "optin2",
    "optin3",
    "passport",
    "paymentdata",
    "phone",
    "read_basket",
    "sso_segment",
    "taxid",
    "write_basket",
    "age_above_16",
    "age_above_18",
    "age_above_21",
    "approximate_net_worth",
    "children",
    "company",
    "company_data",
    "company_email",
    "company_roles",
    "confection_size",
    "current_debt",
    "drivers_license",
    "employment_type",
    "height",
    "housing_conditions",
    "inline_identification",
    "marital_status",
    "mobileapp",
    "monthly_gross_income",
    "monthly_property_costs",
    "monthly_rent",
    "partner_data",
    "profile",
    "shoe_size",
    "tax_residence",
    "weight",
    "gender",
    "id_data"
  ],
  "backchannel_logout_supported": true,
  "issuer": "https://web.verimi.de",
  "authorization_endpoint": "https://web.verimi.de/oauth2/auth",
  "claims_supported": [
    "sub"
  ],
  "userinfo_signing_alg_values_supported": [
    "none",
    "RS256"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "client_secret_basic",
    "private_key_jwt",
    "none"
  ],
  "response_modes_supported": [
    "query",
    "fragment"
  ],
  "backchannel_logout_session_supported": true,
  "token_endpoint": "https://web.verimi.de/oauth2/token",
  "response_types_supported": [
    "code",
    "code id_token",
    "id_token",
    "token id_token",
    "token",
    "token id_token code"
  ],
  "request_uri_parameter_supported": true,
  "grant_types_supported": [
    "authorization_code",
    "implicit",
    "client_credentials",
    "refresh_token"
  ],
  "end_session_endpoint": "https://web.verimi.de/oauth2/sessions/logout",
  "revocation_endpoint": "https://web.verimi.de/oauth2/revoke",
  "userinfo_endpoint": "https://web.verimi.de/userinfo",
  "frontchannel_logout_supported": true,
  "require_request_uri_registration": true,
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "jwks_uri": "https://web.verimi.de/.well-known/jwks.json",
  "frontchannel_logout_session_supported": true,
  "subject_types_supported": [
    "public",
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "request_object_signing_alg_values_supported": [
    "RS256",
    "none"
  ]
}

export const jwks = {
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "public:aa547775-4759-40f9-9c31-bd2340191323",
      "n": "06GQrL_yLyMBiQS8aoe5u0AvT-fgssOITOFT-X9LrRazxXJeZNgxmrMm66-TOIzn6IW--9QpHN6BPcItEQ8uxPIgvJjIL2q-Lc56jCuu7Wo07w7qhlaUGs-UofIRjduZMZ9Nyvi2EQofYo_eIjiootmU4_Dk7uTxT8TYA63-DDMrtElQezRIHZQ_vQzyj-10jNV1ILOniY4Iq6sWqmHTubKGjRgqKKdPF0aBNBkQ5RxdylZFlsqNU9YAciYiAa5TshOxRwvlF8hs3Jx8pG2Ss3dJoxZQwfTWummsR18GfrfIzfh4GZDI6IpdR0Ts1K842D9htQk1nVGvkjrCRUwGPQ"
    },
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "public:0bc31f7d-9ffc-4d67-82bd-2eb70dc6c854",
      "alg": "RS256",
      "n": "uEMNcmT-Xz0e79TKLzlecS0KOZWGDgDXRsREXh1PYNz6g29Ww76FA_rchrWNkGrig32fmcOJolhHh7azJorSrs5B2TYvXxs20JCWMd922YKzwFn_gbaOKe08HsK-p5OnK3WuFMlGBUTtyAUoQHbcV1rjmohbnf58IQFnpk_89V2Nor2zIBih39dMaJa2JHnF7EIgKaWF0GQtPP7gKXpB3i1mDfokxQMiMU5ljuZQpmsJUozeccIfGpWqmZq5UuQt2x_1RAuz4SYuP-H0WVxFolBzlNxQjyRZQ2GZBRM_iNyEZPfqoRdRO2Zl4d_2bN9RKgsZE7TwJ-KGoEQrupt5kw"
    }
  ]
}
