const { Router } = require("express");
const { getCountries } = require('../controllers/Country/getCountries');
const { getCountryById } = require("../controllers/Country/getCountryById");
const { getCountryByName } = require("../controllers/Country/getCountryByName");
const { postActivity } = require("../controllers/Activity/postActivity");
const { getActivity } = require("../controllers/Activity/getActivity");
// rutas a las que vamos a solicitar la informacion de la API
const router = Router();

router.get('/countries', async(req,res)=>{      //define una ruta get para /countries. Si no se proporciona el par de consulta name, llama a la fun getCountries y devuelve los paises obtenidos. Si se da el name, llama a ala fun getCountryByName y devuelve el país filtrado por ese name
    const {name} = req.query

    if(!name){
        try {
            const allCountries = await getCountries()
            res.status(200).json(allCountries)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }else{
        try {
            const filteredCountry = await getCountryByName(name)                
            if(filteredCountry.length > 0){
                res.status(200).json(filteredCountry)
            }else{
                res.status(404).json({error:`Country not Found`})
            }
        } catch (error) {
            return res.status(404).json({error:`Country not Found`})
        }
    }

})

/*La ruta tiene una lógica condicional que verifica si se proporciona el parámetro de consulta name en la solicitud. Si no se proporciona, la ruta llama a la función getCountries() para obtener todos los países y devuelve una respuesta JSON con un código de estado 200.

Si se proporciona el parámetro de consulta name, la ruta llama a la función getCountryByName(name) para obtener el país filtrado por el nombre especificado en el parámetro de consulta. Si se encuentra un país, la ruta devuelve una respuesta JSON con un código de estado 200 y el país filtrado. Si no se encuentra ningún país, la ruta devuelve una respuesta JSON con un código de estado 404 y un mensaje de error.

Si se produce un error al llamar a cualquiera de las funciones getCountries() o getCountryByName(name), la ruta devuelve una respuesta JSON con un código de estado 500 y un mensaje de error.*/

router.get('/countries/:id',async(req,res)=>{       //define una ruta get para /countries/:id donde :id es un param variable en la URL. Llama a la fun getCountryById y devuelve un país correspondiente al id dado
    const {id} = req.params
    
    try {
        const country = await getCountryById(id.toUpperCase())
        res.status(200).json(country)
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({error:error.message})
    }
})

/*El método toUpperCase() se utiliza para convertir una cadena de texto a mayúsculas. En el código seleccionado, se utiliza para convertir el ID del país en mayúsculas antes de pasarlo a la función getCountryById(). Esto se hace para asegurarse de que el ID se compare correctamente con los IDs almacenados en la base de datos, ya que la comparación de cadenas de texto es sensible a mayúsculas y minúsculas.*/

router.post('/activities', async(req,res)=>{       //define una ruta POST para /activities. Obtiene los datos del cuerpo de la solicitud (datos como name, season...). realiza algunas transformaciones en los datos y llama a la fun postActivity para crear una nueva actividad.
    
    try {
    const {name,dificulty,duration,season,countries} = req.body;
    if(!name || !season)
    throw new Error('falta informacion para crear actividad')
    else{
        const new_activity = await postActivity(
            name,
            dificulty,
            duration,
            season,
            countries
            );
            return res.status(200).json(new_activity)
    }
   
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

/* El método toUpperCase() se utiliza para convertir una cadena de texto a mayúsculas. En el código seleccionado, se utiliza para convertir el ID del país en mayúsculas antes de pasarlo a la función getCountryById(). Esto se hace para asegurarse de que el ID se compare correctamente con los IDs almacenados en la base de datos, ya que la comparación de cadenas de texto es sensible a mayúsculas y minúsculas.*/ 

router.get('/activities', async(req,res)=>{     //define una ruta get para /activities. Llama a la fun getActivity y devuelve todas las actividades
    try {
        const activities = await getActivity()
        res.status(200).send(activities)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


module.exports = router;

/*Los parámetros de consulta se envían en la URL y se pueden acceder en el servidor a través del objeto req.query en Express. Se utilizan para filtrar, ordenar o paginar los datos.

El cuerpo de la solicitud se envía en el cuerpo de la solicitud HTTP y se puede acceder en el servidor a través del objeto req.body en Express. Se utilizan para enviar datos más complejos, como objetos o matrices, para crear o actualizar recursos.

Los parámetros de ruta se envían en la URL y se pueden acceder en el servidor a través del objeto req.params en Express. Se utilizan para identificar un recurso específico en la API, como un ID de usuario o un nombre de archivo.

En resumen, los parámetros de consulta se utilizan para filtrar datos, el cuerpo de la solicitud se utiliza para enviar datos complejos y los parámetros de ruta se utilizan para identificar recursos específicos en la API.*/



