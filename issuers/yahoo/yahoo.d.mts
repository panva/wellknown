export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let token_endpoint: string;
    let introspection_endpoint: string;
    let userinfo_endpoint: string;
    let token_revocation_endpoint: string;
    let jwks_uri: string;
    let response_types_supported: string[];
    let subject_types_supported: string[];
    let grant_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let scopes_supported: string[];
    let acr_values_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let claims_supported: string[];
    let response_modes_supported: string[];
    let display_values_supported: string[];
    let claims_parameter_supported: boolean;
    let request_parameter_supported: boolean;
    let request_uri_parameter_supported: boolean;
}
export namespace jwks {
    let keys: ({
        kty: string;
        alg: string;
        use: string;
        kid: string;
        n: string;
        e: string;
        crv?: undefined;
        x?: undefined;
        y?: undefined;
    } | {
        kty: string;
        alg: string;
        use: string;
        crv: string;
        kid: string;
        x: string;
        y: string;
        n?: undefined;
        e?: undefined;
    })[];
}
