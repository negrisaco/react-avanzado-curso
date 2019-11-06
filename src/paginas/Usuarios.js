import React, {useEffect} from 'react'
import {Consumer} from '../contexto'

const Usuarios = () => {
 // este hook simula el didmount del app
    useEffect(()=>{
        console.log('Hizo Render!');
        
    }, [/*Este array de dependencias sirve para decirle al hook que queremos que se vuelva a ejecutar si todo lo que ponemos aca cambia. Como lo dejamos vacio, se ejecuta una ùnica vez.*/])
    return (
        <div>
            <Consumer>
                {({usuarios, eliminarUsuario})=> // (contexto)
                    // let {usuarios:usuarios} = contexto
                    // let {usuarios} = contexto
                    usuarios.map((usuario,i)=><p key={i}>{usuario.name} 
                    <button className="material-icon" onClick={eliminarUsuario.bind(null, i)}>Clear</button>
                    <button className="material-icon">Create</button>
                    </p>)
                }
            </Consumer>
        </div>
    )
}

export default Usuarios
