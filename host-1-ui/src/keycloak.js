import Keycloak from "keycloak-js"

const keycloak = Keycloak({
  url: "http://localhost:8000/auth",
  realm: "host1",
  clientId: "host1",
})

export default keycloak
