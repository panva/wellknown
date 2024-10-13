export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let device_authorization_endpoint: string;
    let token_endpoint: string;
    let userinfo_endpoint: string;
    let revocation_endpoint: string;
    let jwks_uri: string;
    let response_types_supported: string[];
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let scopes_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let claims_supported: string[];
    let code_challenge_methods_supported: string[];
    let grant_types_supported: string[];
}
export namespace jwks {
    let keys: {
        e: string;
        kid: string;
        alg: string;
        kty: string;
        use: string;
        n: string;
    }[];
}
