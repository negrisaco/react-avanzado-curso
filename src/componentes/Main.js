import React from 'react'
import Usuarios from '../paginas/Usuarios'
import { Route, Switch } from 'react-router-dom'
import Tickets from '../paginas/Ticket'
import Home from '../paginas/Home'

const Main = () => { //rfa: react function component
    return (
        <main>
            <h2>Home</h2>

            {/*<Usuarios/>*/}
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/usuarios" component={Usuarios}/>
                <Route path="/tickets" component={Tickets}/>
            </Switch>
        </main>
    )
}

export default Main
