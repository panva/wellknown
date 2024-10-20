export namespace metadata {
    let token_endpoint: string;
    let token_endpoint_auth_methods_supported: string[];
    let jwks_uri: string;
    let response_modes_supported: string[];
    let subject_types_supported: string[];
    let id_token_signing_alg_values_supported: string[];
    let response_types_supported: string[];
    let scopes_supported: string[];
    let issuer: string;
    let request_uri_parameter_supported: boolean;
    let userinfo_endpoint: string;
    let authorization_endpoint: string;
    let device_authorization_endpoint: string;
    let http_logout_supported: boolean;
    let frontchannel_logout_supported: boolean;
    let end_session_endpoint: string;
    let claims_supported: string[];
    let kerberos_endpoint: string;
    let tenant_region_scope: any;
    let cloud_instance_name: string;
    let cloud_graph_host_name: string;
    let msgraph_host: string;
    let rbac_url: string;
}
export namespace jwks {
    let keys: {
        kty: string;
        use: string;
        kid: string;
        x5t: string;
        n: string;
        e: string;
        x5c: string[];
        cloud_instance_name: string;
        issuer: string;
    }[];
}
