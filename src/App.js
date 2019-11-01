import React from 'react'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'
import {Provider} from './contexto'

export default class App extends React.Component {
    constructor(){
        super()
        // me permite la reaccion de los demas componentes a partir de este
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/usuarios")
        .then((response)=>{ return response.json()})
        .then((response)=>{ 
            console.log("RESPU", response)
            this.setState({usuarios: response})
        })
    }

    render(){
        return(
            <Provider value={this.state}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        )
    }
}

//exp
/*export default () => 
<Provider value={}>
    <Header/>
    <Main usuarios="Sheila"/>
    <Footer/>
</Provider>*/