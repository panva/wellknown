export namespace metadata {
    let issuer: string;
    let jwks_uri: string;
    let authorization_endpoint: string;
    let token_endpoint: string;
    let userinfo_endpoint: string;
    let end_session_endpoint: string;
    let check_session_iframe: string;
    let revocation_endpoint: string;
    let introspection_endpoint: string;
    let device_authorization_endpoint: string;
    let pushed_authorization_request_endpoint: string;
    let require_pushed_authorization_requests: boolean;
    let frontchannel_logout_supported: boolean;
    let frontchannel_logout_session_supported: boolean;
    let backchannel_logout_supported: boolean;
    let backchannel_logout_session_supported: boolean;
    let scopes_supported: string[];
    let claims_supported: string[];
    let grant_types_supported: string[];
    let response_types_supported: string[];
    let response_modes_supported: string[];
    let token_endpoint_auth_methods_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let subject_types_supported: string[];
    let code_challenge_methods_supported: string[];
    let request_parameter_supported: boolean;
    let request_object_signing_alg_values_supported: string[];
    let prompt_values_supported: string[];
    let authorization_response_iss_parameter_supported: boolean;
    let dpop_signing_alg_values_supported: string[];
    let ui_locales_supported: string[];
    let acr_values_supported: string[];
    let one_time_token_endpoint: string;
}
export namespace jwks {
    let keys: {
        kty: string;
        use: string;
        kid: string;
        x5t: string;
        e: string;
        n: string;
        x5c: string[];
        alg: string;
    }[];
}
