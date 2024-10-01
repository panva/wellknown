export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let token_endpoint: string;
    let jwks_uri: string;
    let response_types_supported: string[];
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
}
export namespace jwks {
    let keys: {
        kty: string;
        use: string;
        kid: string;
        n: string;
        e: string;
        alg: string;
    }[];
}
