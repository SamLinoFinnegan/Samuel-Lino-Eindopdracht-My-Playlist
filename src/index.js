import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import allReducers from "./reducers"
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./styling/index.css"


const myStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById("root")
)