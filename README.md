# demo-federated-module-login

A sample project demonstrating how a frontend module encapsulated on a bigger project (via module federation) can reuse the main auth session on another api without logging-in again.

## Overview

![image](https://user-images.githubusercontent.com/7760/135670406-c2fba7f8-0f40-4b81-856a-629ecb95631b.png)

In a platform (`host-ui`) that uses [module federation][module-federation] for hosting multiple
web apps as modules, and where the user authentication is handled by a keycloak server (`host-idp`).
We want one of the modules(`module-1-ui`) to consume an API (`module-1-service`) that uses another
server (`module-1-idp`) for authentication.

This other server is one that trusts the IDP from the host platform (`module-1-idp` have `host-idp`
as an identity provider). So the objective is to demonstrate how the module code can authenticate
on the second IDP reusing the user session from the host application.

## Requirements

To run this demo locally it is required to have installed:

- docker
- nodejs

## How to run this demo

### Setup both IDPs

For this demo, we will keep 2 keycloak servers running on 2 different ports, and configure each one
using the web admin interface.

The steps below are better followed at one server admin UI at time, or using different browsers.
Keycloak is buggy.

#### host-idp (port 8080)

##### launch
```
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.2
```

##### create a user


#### module-1-idp (port 8081)

##### launch
```
docker run -p 8081:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.2
```

##### setup host-idp as identity provider


[module-federation]: https://webpack.js.org/concepts/module-federation/
