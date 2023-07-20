import {GET_COUNTRIES, 
    GET_COUNTRY_BY_ID, 
    POST_ACTIVITY, 
    ALPHABETICAL_ORDER, 
    GET_COUNTRIES_BY_NAME,
    POPULATION_ORDER,
    CONTINENT_FILTER,
    GET_ACTIVITIES,
    ACTIVITY_FILTER

} from './actions';

const initialState = {
    allCountries: [],
    countryDetail: [],
    post : [],
    alphabeticalSort: "",
    populationSort: "",
    filterByContinent: "",
    Activities: [],
    filterByActivity: "",
    
};



 export default function rootReducer(state = initialState, action) {
  console.log(action.payload)
    switch (action.type) {
        
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,

            };

            case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries: [...action.payload],
      };

        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryDetail: action.payload
            };

            case POST_ACTIVITY:
                return {
                  ...state,
                  post: [...state.post, action.payload],
                };

               case ALPHABETICAL_ORDER:
      return {
        ...state,
        alphabeticalSort: action.payload,
      };
             
      case POPULATION_ORDER:
        return {
          ...state,
          populationSort: action.payload,
        };
  
      case CONTINENT_FILTER:
        return {
          ...state,
          filterByContinent: action.payload,
        };
  
      case GET_ACTIVITIES:
        return {
          ...state,
          Activities: action.payload,
        };
  
      case ACTIVITY_FILTER:
        return {
          ...state,
          filterByActivity: action.payload,
        };
  
            
        default:
            return state;
    }
    
}

/*El reducer es una función que toma el estado actual de la aplicación y una acción, y devuelve un nuevo estado de la aplicación.

El código importa las constantes de acción GET_COUNTRIES, GET_COUNTRY_BY_ID, POST_ACTIVITY, ALPHABETICAL_ORDER, GET_COUNTRIES_BY_NAME, POPULATION_ORDER, CONTINENT_FILTER, GET_ACTIVITIES y ACTIVITY_FILTER desde el archivo actions.js.

La constante initialState define el estado inicial de la aplicación. El estado inicial contiene las propiedades allCountries, countryDetail, post, alphabeticalSort, populationSort, filterByContinent, Activities y filterByActivity.

La función rootReducer es el reducer de la aplicación. La función toma dos argumentos: el estado actual de la aplicación y una acción. La función utiliza un switch para manejar diferentes tipos de acciones. Cada caso devuelve un nuevo estado de la aplicación que se crea utilizando el operador spread ... para copiar el estado actual y actualizar las propiedades relevantes.

Por ejemplo, el caso GET_COUNTRIES actualiza la propiedad allCountries del estado con el valor de action.payload. El caso POST_ACTIVITY actualiza la propiedad post del estado agregando action.payload al final del array. */

