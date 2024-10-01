export namespace metadata {
    let version: string;
    let token_endpoint_auth_methods_supported: string[];
    let claims_parameter_supported: boolean;
    let request_parameter_supported: boolean;
    let request_uri_parameter_supported: boolean;
    let require_request_uri_registration: boolean;
    let grant_types_supported: string[];
    let frontchannel_logout_supported: boolean;
    let frontchannel_logout_session_supported: boolean;
    let backchannel_logout_supported: boolean;
    let backchannel_logout_session_supported: boolean;
    let response_types_supported: string[];
    let response_modes_supported: string[];
    let subject_types_supported: string[];
    let claim_types_supported: string[];
    let scopes_supported: string[];
    let token_endpoint_auth_signing_alg_values_supported: string[];
    let revocation_endpoint_auth_signing_alg_values_supported: string[];
    let revocation_endpoint_auth_methods_supported: string[];
    let introspection_endpoint_auth_signing_alg_values_supported: string[];
    let introspection_endpoint_auth_methods_supported: string[];
    let claims_supported: string[];
    let userinfo_signing_alg_values_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let request_object_signing_alg_values_supported: string[];
    let userinfo_encryption_alg_values_supported: string[];
    let id_token_encryption_alg_values_supported: string[];
    let request_object_encryption_alg_values_supported: string[];
    let userinfo_encryption_enc_values_supported: string[];
    let id_token_encryption_enc_values_supported: string[];
    let request_object_encryption_enc_values_supported: string[];
    let acr_values_supported: string[];
    let issuer: string;
    let jwks_uri: string;
    let authorization_endpoint: string;
    let registration_endpoint: string;
    let token_endpoint: string;
    let userinfo_endpoint: string;
}
export namespace jwks {
    let keys: {
        n: string;
        e: string;
        kty: string;
        kid: string;
    }[];
}
