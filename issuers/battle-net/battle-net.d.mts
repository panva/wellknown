export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let end_session_endpoint: string;
    let token_endpoint: string;
    let jwks_uri: string;
    let revocation_endpoint: string;
    let introspection_endpoint: string;
    let userinfo_endpoint: string;
    let device_authorization_endpoint: string;
    let response_types_supported: string[];
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let grant_types_supported: string[];
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
