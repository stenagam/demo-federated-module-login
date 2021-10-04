# Module 1 IDP (Keycloak)

This is an example of preconfigured keycloak server that runs on port `8001`,
preconfigured to have a realm called `module1` and a OAuth 2 client ID `module1`.

- Client ID: `module1` 
- Authorization Endpoint: `http://localhost:8001/auth/realms/module1/protocol/openid-connect/auth`
- Token Endpoint: `http://localhost:8001/auth/realms/module1/protocol/openid-connect/token`

Access http://localhost:8001/auth/realms/module1/.well-known/openid-configuration for a complete list.

## Host 1 IDP as Identity Provider

The preconfiguration also sets the `host-1-idp` server on port `8000` as an Identity provider of this IDP, which means that users of that IDP can choose to login on this one using the other account.

(the pre configuration of the host-1-idp contains a confidential Oauth2 client named `module1idp` used here for setup of the brokering)

## Usage

With docker-compose installed, run: `docker-compose up`
