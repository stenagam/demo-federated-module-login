import React from "react"
import ReactDOM from "react-dom"
import Component1 from "./component"

const App = () => (
  <>
    <h1>Module 1 (standalone app)</h1>
    <Component1 />
  </>
)
ReactDOM.render(<App />, document.getElementById("app"))
