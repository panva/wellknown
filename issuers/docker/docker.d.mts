export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let token_endpoint: string;
    let device_authorization_endpoint: string;
    let userinfo_endpoint: string;
    let mfa_challenge_endpoint: string;
    let jwks_uri: string;
    let registration_endpoint: string;
    let revocation_endpoint: string;
    let scopes_supported: string[];
    let response_types_supported: string[];
    let code_challenge_methods_supported: string[];
    let response_modes_supported: string[];
    let subject_types_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let claims_supported: string[];
    let request_uri_parameter_supported: boolean;
    let request_parameter_supported: boolean;
    let id_token_signing_alg_values_supported: string[];
    let token_endpoint_auth_signing_alg_values_supported: string[];
    let backchannel_logout_supported: boolean;
    let backchannel_logout_session_supported: boolean;
}
export namespace jwks {
    let keys: {
        kty: string;
        use: string;
        n: string;
        e: string;
        kid: string;
        x5t: string;
        x5c: string[];
        alg: string;
    }[];
}
