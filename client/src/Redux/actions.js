import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const POPULATION_ORDER = "POPULATION_ORDER";
export const CONTINENT_FILTER = "CONTINENT_FILTER";
export const ACTIVITY_FILTER = "ACTIVITY_FILTER";
export const GET_ACTIVITIES = "GET_ACTIVITIES";



 export function getCountries() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/countries');
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
            
        } catch (error) {

            throw new Error(error.message);
            
        }
    }
}

export function getCountriesByName(name) {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          `http://localhost:3001/countries/?name=${name}`
        );
        return dispatch({
          type: GET_COUNTRIES_BY_NAME,
          payload: response.data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  }
  

    export function getCountryById(id) {

        return async function (dispatch) {
            try {
                
                const response = await axios.get(`http://localhost:3001/countries/${id}`);
                const country = response.data;
               return  dispatch({
                    type: GET_COUNTRY_BY_ID,
                    payload: country
                })

            

            } catch (error) {
                throw new Error(error.message);
            }
        }
    }

    export function postActivity(form) {
        return async function (dispatch) {
          try {
            const response = await axios.post(
              "http://localhost:3001/activities",
              form
            );
            return dispatch({
              type: POST_ACTIVITY,
              payload: response.data,
            });
          } catch (error) {
            alert(error.message);
          }
        };
      }

      export function alphabeticalOrder(order) {
        return {
          type: ALPHABETICAL_ORDER,
          payload: order,
        };
      }

      export function populationOrder(order) {
        return {
          type: POPULATION_ORDER,
          payload: order,
        };
      }
      
      export function continentFilter(continent) {
        return {
          type: CONTINENT_FILTER,
          payload: continent,
        };
      }
      
      export function activityFilter(activity) {
        return {
          type: ACTIVITY_FILTER,
          payload: activity,
        };
      }
      
      export function getActivities() {
        return async function (dispatch) {
          try {
            const response = await axios.get("http://localhost:3001/activities/");
            return dispatch({
              type: GET_ACTIVITIES,
              payload: response.data,
            });
          } catch (error) {
            alert(error.message);
          }
        };
      }

      /* Este bloque de código es el archivo actions.js que define las acciones de la aplicación de Redux. Las acciones son objetos que contienen un tipo y, opcionalmente, un payload con datos adicionales. Las acciones se envían al store de Redux utilizando la función dispatch.

El código importa la biblioteca axios para realizar solicitudes HTTP.

Las constantes de acción GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, POST_ACTIVITY, ALPHABETICAL_ORDER, POPULATION_ORDER, CONTINENT_FILTER, GET_ACTIVITIES y ACTIVITY_FILTER se exportan para ser utilizadas en el reducer.

Las funciones getCountries, getCountriesByName, getCountryById, postActivity, alphabeticalOrder, populationOrder, continentFilter, activityFilter y getActivities son las acciones de la aplicación.

Por ejemplo, la función getCountries es una acción que realiza una solicitud HTTP a la API para obtener todos los países y envía una acción al store de Redux con el tipo GET_COUNTRIES y el payload response.data.

La función postActivity es una acción que realiza una solicitud HTTP a la API para agregar una nueva actividad y envía una acción al store de Redux con el tipo POST_ACTIVITY y el payload response.data.

Las funciones alphabeticalOrder, populationOrder, continentFilter y activityFilter son acciones que actualizan el estado de la aplicación con los valores de ordenamiento y filtrado seleccionados por el usuario.

En resumen, este bloque de código define las acciones de la aplicación de Redux utilizando funciones que realizan solicitudes HTTP a la API y envían acciones al store de Redux con diferentes tipos y payloads. Las acciones se utilizan en el reducer para actualizar el estado de la aplicación.*/