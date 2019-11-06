This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

-------------------------------------------------------------------------------------------------------------------------
/HoracioGutierrez/react-avanzado-accenture.git

advanced-new-file


EducaciónIT@Alumno-1006-12 MINGW64 ~/Documents/sheila_machado/app
$ npm i -g json-server
C:\Users\EducaciónIT\AppData\Roaming\npm\json-server -> C:\Users\EducaciónIT\AppData\Roaming\npm\node_modules\json-server\lib\cli\bin.js
+ json-server@0.15.1
added 237 packages in 12.154s

EducaciónIT@Alumno-1006-12 MINGW64 ~/Documents/sheila_machado/app
$ echo {} >> db.json

EducaciónIT@Alumno-1006-12 MINGW64 ~/Documents/sheila_machado/app (master)
$ json-server --watch db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...


----------------------------------
npm i -g json-server
* crear un archivo <nombre>.json
json-server --watch <nombre>.json
{}

PEDIDO
fetch("http://localhost:3000/usuarios")

.then((response)=>{ return response.json() })

.then((response)=>{ console.log(response) })

CREACION
fetch("http://localhost:3000/usuarios", {
	
method : "POST",
	
headers: {"content-type" : "application/json"}, 
body : JSON.stringify({nombre:"Horacio"})

})

PUT
usar put para reemplazar solamente

fetch("http://localhost:3000/usuarios", {
	
method : "PUT",
	
headers: {"content-type" : "application/json"}, 
body : JSON.stringify({nombre:"Sheila"})

})

PATCH

fetch("http://localhost:3000/usuarios/1", {
	
method : "PATCH",
	
headers: {"content-type" : "application/json"}, 
body : JSON.stringify({edad:"28"})

})

DELETE
fetch("http://localhost:3000/usuarios/1", {
	
method : "DELETE"
	
})


Ofuscar variables de entorno

PROPS: Los parametros de un componente

<App x/> //x=true
<App x="1"/> //x="1"
<App x={expresion}/> //x=expresion {} son el escape de jsx, terminò ahì

si utilizo funcion flecha sin clase no lo puedo instanciar con new luego

Puedo usar REDUX (se instala aparte, tiene su propia consola, tengo reducer) o Context API (viene con react - mas facil de implementar pero no tiene reducer, lo perdes)
Pero si es una app grande la API de Context queda chica

Context API: Es un patron de diseño para compartir estados a travez de componentes hijos sin tener que pasar props

1) Crear tu contexto con la funcion createContext (lo que quiero compartir en el contexto)
2) Exporto el Provider, Consumer y el contexto entero
3) Uso el Provider en el nivel superior de la aplicacion
4) Le asigno un valor al contexto


CICLO DE VIDA:

mount:
	constructor se ejecuta una sola vez//preparo, armo lo que voy a dibujar
	render //empiezo a dibujar el componente en la pantalla
	componentDidMount
	

update:
	render =  Se ejecuta cada vez que cambia el estado/contenido de props
	shouldComponentUpdate

unmount:
	componentWillUnmount

02C.07a.b.j.



----------------------------------------------------- CLASE 2 ---------------------------------------

SENTENCIA = no necesariamente te da algo a cambio

(return)

let a = if(cond) { return true } else { return false }
// NO SE PPUEDE asignar a una variable porque no tiene retorno, no es expresion

let  a = [1,2,3].forEach(()=>{}) => :void

EXPRESION 

let a = cond ? true : false
let a = [1,2,3].map((e,i)=>{ return 0}) // El retorno de un map es una array de misma longitud del saliente


Cada componente puede tener un estado si y solo si es de tipo Class, por defecto un componente no puede tener estado si es una funcion normal o lambda.

Si quiero cambiarle el estado a un componente, solo lo puede hacer aquel componente que haya creado el estado usando la funcion 


REACT-ROUTER-DOM: Es la historia que nos da componentes para la navegaciòn a travez de una pagina SPA.

Tipos de navegaciones
-History: BrowserRouter
-Hash: HashRouter
-Memoria: MemoryRouter
-Static: StaticRouter

Hook: Son funciones que podemos ejecutar en componentes funcionales, las cuales no emulan ciclos de vida, sin tener que migrar un componente a Class (use****)

useEffect(()=>{},[])