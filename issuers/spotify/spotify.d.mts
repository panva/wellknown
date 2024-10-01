export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let token_endpoint: string;
    let userinfo_endpoint: string;
    let revocation_endpoint: string;
    let scopes_supported: string[];
    let jwks_uri: string;
    let response_types_supported: string[];
    let response_modes_supported: string[];
    let code_challenge_methods_supported: string[];
    let grant_types_supported: string[];
    let acr_values_supported: string[];
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let claims_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let ui_locales_supported: string[];
}
export namespace jwks {
    let keys: {
        kty: string;
        e: string;
        use: string;
        kid: string;
        alg: string;
        n: string;
    }[];
}
