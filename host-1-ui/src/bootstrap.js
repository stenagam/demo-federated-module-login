import React from "react"
import ReactDOM from "react-dom"
import Component1 from "module1/Component1"

const App = () => (
  <>
    <h1>Host</h1>
    <div style={{ border: "1px solid gray" }}>
      <Component1 />
    </div>
  </>
)
ReactDOM.render(<App />, document.getElementById("app"))
