import React, { useState } from "react"
import ReactDOM from "react-dom"
import Component1 from "module1/Component1"
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web"
import keycloak from "./keycloak"

const LoginButton = () => {
  const { keycloak, initialized } = useKeycloak()
  const [profile, setProfile] = useState({})
  console.log({ keycloak, initialized })
  if (!initialized || !keycloak || !keycloak.login) {
    return null
  }
  const { authenticated, login, logout, tokenParsed } = keycloak
  if (!authenticated) {
    return <button onClick={login}>Login</button>
  }
  return (
    <>
      <dt>Parsed token:</dt>
      <dd><pre>{JSON.stringify(tokenParsed, ' ', 2)}</pre></dd>
      <button onClick={logout}>Logout</button>
    </>
  )
}

const App = () => (
  <ReactKeycloakProvider authClient={keycloak}>
    <h1>Host 1</h1>
    <p>
      <LoginButton />
    </p>
    <div style={{ border: "1px solid gray" }}>
      <Component1 />
    </div>
  </ReactKeycloakProvider>
)
ReactDOM.render(<App />, document.getElementById("app"))
