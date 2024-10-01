export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let jwks_uri: string;
    let response_types_supported: string[];
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let claims_supported: string[];
}
export namespace jwks {
    let keys: {
        kid: string;
        kty: string;
        alg: string;
        use: string;
        n: string;
        e: string;
    }[];
}
