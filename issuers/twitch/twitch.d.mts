export namespace metadata {
    let authorization_endpoint: string;
    let claims_parameter_supported: boolean;
    let claims_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let issuer: string;
    let jwks_uri: string;
    let response_types_supported: string[];
    let scopes_supported: string[];
    let subject_types_supported: string[];
    let token_endpoint: string;
    let token_endpoint_auth_methods_supported: string[];
    let userinfo_endpoint: string;
}
export namespace jwks {
    let keys: {
        alg: string;
        e: string;
        kid: string;
        kty: string;
        n: string;
        use: string;
    }[];
}
