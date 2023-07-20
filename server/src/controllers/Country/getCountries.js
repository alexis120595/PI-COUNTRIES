const axios = require('axios');
const {Country} = require('../../db');

const getCountries = async() =>{
    
    const URL = 'http://localhost:5000/countries'

    try {
        const {data} = await axios(URL)

        let countries = await Promise.all(      //se crean los paises con las propiedades obtenidas de la API
            data.map(async(element)=>{
                const country = {
                    id:element.cca3,
                    name:element.name.common,
                    flags:element.flags.png,
                    capital:element.capital ? element.capital[0]: 'No Data',
                    continents:element.continents[0],
                    population:element.population,
                    subregion:element.subregion,
                    area:element.area ? element.area.toString() : 'No Data'
                }
    
                Country.findOrCreate({        //usamos el metodo findOrCreate del model Country para buscar un país con el mismo ID en la DB y crearlo si no existe. Se pasa un obj con las propiedades del país como argumento para la busqueda o creación
                    where:{
                        id:element.cca3,
                        name:element.name.common,
                        flags:element.flags.png,
                        capital:element.capital ? element.capital[0]: 'No Data',
                        continents:element.continents[0],
                        population:element.population,
                        subregion:element.subregion? element.subregion:'No Data',
                        area:element.area ? element.area.toString() : 'No Data'
                    },
                })
                return country
            })
        )             
        return countries
    } catch (error) {
        return error
    }
}

module.exports = {getCountries}

/* La función utiliza la biblioteca axios para realizar una solicitud HTTP a la URL de la API externa que devuelve información de países. La respuesta de la API se almacena en la variable data.

Luego, la función utiliza el método Promise.all() para crear una promesa que se resuelve cuando se han creado todos los países en la base de datos. Para cada elemento en data, la función crea un objeto country con las propiedades obtenidas de la API y utiliza el método findOrCreate() del modelo Country para buscar un país con el mismo ID en la base de datos y crearlo si no existe. Se pasa un objeto con las propiedades del país como argumento para la búsqueda o creación.

Finalmente, la función devuelve un array de objetos country que representan los países creados en la base de datos. Si se produce un error al llamar a la API o al crear los países en la base de datos, la función devuelve un objeto Error con un mensaje de error.*/

//En resumen, este código obtiene datos de países desde una API
//los procesa y los almacena en una base de datos utilizando el modelo 'Country'. 
//Luego, devuelve los países como resultado de la función 'getCountries'.