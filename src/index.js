import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./funcBased/components/TodoContainer"
import { BrowserRouter } from "react-router-dom"

import "./funcBased/App.css"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <TodoContainer />
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById("root"))