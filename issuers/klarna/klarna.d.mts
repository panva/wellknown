export namespace metadata {
    let issuer: string;
    let authorization_endpoint: string;
    let token_endpoint: string;
    let jwks_uri: string;
    let subject_types_supported: string[];
    let response_types_supported: string[];
    let claims_supported: string[];
    let grant_types_supported: string[];
    let response_modes_supported: string[];
    let userinfo_endpoint: string;
    let scopes_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let userinfo_signing_alg_values_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let id_token_signed_response_alg: string[];
    let userinfo_signed_response_alg: string[];
    let request_parameter_supported: boolean;
    let request_uri_parameter_supported: boolean;
    let require_request_uri_registration: boolean;
    let claims_parameter_supported: boolean;
    let revocation_endpoint: string;
    let backchannel_logout_supported: boolean;
    let backchannel_logout_session_supported: boolean;
    let frontchannel_logout_supported: boolean;
    let frontchannel_logout_session_supported: boolean;
    let end_session_endpoint: string;
    let request_object_signing_alg_values_supported: string[];
    let code_challenge_methods_supported: string[];
}
export namespace jwks {
    let keys: {
        use: string;
        kty: string;
        kid: string;
        alg: string;
        n: string;
        e: string;
    }[];
}
