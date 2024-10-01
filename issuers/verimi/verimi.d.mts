export namespace metadata {
    let request_parameter_supported: boolean;
    let claims_parameter_supported: boolean;
    let scopes_supported: string[];
    let backchannel_logout_supported: boolean;
    let issuer: string;
    let authorization_endpoint: string;
    let claims_supported: string[];
    let userinfo_signing_alg_values_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let response_modes_supported: string[];
    let backchannel_logout_session_supported: boolean;
    let token_endpoint: string;
    let response_types_supported: string[];
    let request_uri_parameter_supported: boolean;
    let grant_types_supported: string[];
    let end_session_endpoint: string;
    let revocation_endpoint: string;
    let userinfo_endpoint: string;
    let frontchannel_logout_supported: boolean;
    let require_request_uri_registration: boolean;
    let code_challenge_methods_supported: string[];
    let jwks_uri: string;
    let frontchannel_logout_session_supported: boolean;
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let request_object_signing_alg_values_supported: string[];
}
export namespace jwks {
    let keys: ({
        kty: string;
        e: string;
        use: string;
        kid: string;
        n: string;
        alg?: undefined;
    } | {
        kty: string;
        e: string;
        use: string;
        kid: string;
        alg: string;
        n: string;
    })[];
}
