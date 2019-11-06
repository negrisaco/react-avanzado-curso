import React from 'react' //imr
import ReactDOM from 'react-dom' //imrd
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render( //JSX
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)

