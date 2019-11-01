import React from 'react'
import {Consumer} from '../contexto'

const Main = () => { //rfa: react function component
    return (
        <main>
            <h2>Home</h2>
            <Consumer>
                {({usuarios})=>{ // (contexto)
                    // let {usuarios:usuarios} = contexto
                    // let {usuarios} = contexto
                    console.log(usuarios)
                }}
            </Consumer>
        </main>
    )
}

export default Main
