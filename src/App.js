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
            usuarios: [],
            eliminarUsuario : this.eliminarUsuario
        }
        // this.eliminarUsuario = this.eliminarUsuario.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:3000/usuarios")
        .then((response)=>{ return response.json()})
        .then((response)=>{ 
            console.log("RESPU", response)
            this.setState({usuarios: response})
        })
    }

    eliminarUsuario = (i) => {
        console.log('Eliminandoo....', i)
        /*let nuevosUsuarios = []
        nuevosUsuarios.concat(this.state.usuarios.slice(0,i))
        nuevosUsuarios.concat(this.state.usuarios.slice(i+1))
        this.setState({usuarios : nuevosUsuarios})*/
        fetch(`http://localhost:3000/usuarios/${this.state.usuarios[i].id}`, {method : "DELETE"}).then(resp =>
            console.log('RESP ', resp)
        )
        this.setState({
            usuarios: [
                ...this.state.usuarios.slice(0,i),
                ...this.state.usuarios.slice(i+1)
            ]
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