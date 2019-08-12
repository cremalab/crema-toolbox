---
to: src/index.tsx
---
import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { Initializer } from "./components/Initializer"
import * as serviceWorker from "./serviceWorker"
import "./index.css"

ReactDOM.render(
  <Initializer>
    <App />
  </Initializer>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
