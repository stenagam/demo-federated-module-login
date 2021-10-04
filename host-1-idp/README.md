# Host 1 IDP (Keycloak)

This is an example of preconfigured keycloak server that runs on port `8000`,
preconfigured to have a realm called `host1` and a OAuth 2 client ID `host1`.

- Client ID: `host1` 
- Authorization Endpoint: `http://localhost:8000/auth/realms/host1/protocol/openid-connect/auth`
- Token Endpoint: `http://localhost:8000/auth/realms/host1/protocol/openid-connect/token`

Access http://localhost:8000/auth/realms/host1/.well-known/openid-configuration for a complete list.

## Usage

With docker-compose installed, run: `docker-compose up`
