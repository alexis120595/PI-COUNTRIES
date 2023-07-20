import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";


const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE|| compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) 
);

export default store;


/* El store es un objeto que contiene el estado global de la aplicación y proporciona métodos para actualizar y acceder a este estado.

El código importa las funciones createStore, applyMiddleware y compose de la biblioteca redux, y el middleware thunkMiddleware de la biblioteca redux-thunk.

La constante composeEnhancer se utiliza para habilitar la extensión de Redux DevTools en el navegador. Si la extensión no está instalada, se utiliza la función compose por defecto.

La constante store se crea utilizando la función createStore de Redux. La función toma dos argumentos: el primer argumento es el reducer de la aplicación, que se define en el archivo reducer.js, y el segundo argumento es el middleware que se va a utilizar. En este caso, se utiliza el middleware thunkMiddleware.*/

/*redux-thunk es un middleware para Redux que permite escribir acciones asíncronas en una aplicación de Redux. En lugar de devolver un objeto de acción, una acción asíncrona devuelve una función que toma como argumento la función dispatch de Redux. Esta función puede realizar operaciones asíncronas, como solicitudes HTTP, y luego enviar una o varias acciones al store de Redux utilizando la función dispatch. */


/*FLUJO DE LA INFO DE REDUX

El proceso comienza cuando un usuario interactúa con la vista, por ejemplo, haciendo clic en un botón. La vista envía una acción al store de Redux utilizando la función dispatch. La acción es un objeto que contiene un tipo y, opcionalmente, un payload con datos adicionales.

El store de Redux recibe la acción y la envía al reducer. El reducer es una función que toma el estado actual de la aplicación y la acción, y devuelve un nuevo estado de la aplicación. El reducer actualiza el estado de la aplicación según la acción recibida y devuelve el nuevo estado al store de Redux.

El store de Redux actualiza su estado con el nuevo estado devuelto por el reducer. Luego, el store de Redux notifica a todos los componentes de la vista que el estado ha cambiado.

Los componentes de la vista que están conectados al store de Redux a través de la función connect reciben el nuevo estado como propiedades y se vuelven a renderizar con los nuevos datos.

En resumen, el flujo de información en Redux sigue un patrón unidireccional desde la vista a través de las acciones, al store de Redux, y luego a los componentes de la vista. La vista envía una acción al store de Redux, el reducer actualiza el estado de la aplicación según la acción recibida, el store de Redux actualiza su estado con el nuevo estado devuelto por el reducer, y los componentes de la vista se vuelven a renderizar con los nuevos datos.
*/
