import React from "react"
import ReactDOM from "react-dom"
import Component1 from "./component"

const App = () => (
  <>
    <h1>Standalone App 1</h1>
    <Component1 />
  </>
)
ReactDOM.render(<App />, document.getElementById("app"))
