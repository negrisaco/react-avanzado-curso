import {createContext} from "react"

// dif var y let -> let no se mete en window que ya es re pesado

let contexto = createContext()

// destructuring con shorthand
/*
    export let Provider = context.Provider
    export let Consumer = contexto.Consumer

    export let {Provider:Provider, Consumer:Consumer} = contexto

*/
export let {Provider, Consumer} = contexto

export default contexto


