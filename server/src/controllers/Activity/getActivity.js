const { Activity, Country } = require('../../db')

const getActivity = async () => {

  try {
     const activities = await Activity.findAll({
      include: {
        model: Country, // Modelo "Country" se unirá a la consulta
        as: 'Countries', // Alias para la relación con "Country"
        attributes: ["id", "name"], // Selecciona solo las columnas "id" y "name" de "Country"
        through: { attributes: [] } // No se seleccionarán columnas de la tabla intermedia
      }
    })

    return activities // Devuelve los resultados de la consulta
  } catch (error) {
    throw Error // Lanza el error en caso de que ocurra uno
  }
}

module.exports = {
  getActivity
}

/*La función se utiliza para obtener todas las actividades almacenadas en la base de datos relacional utilizando el modelo Activity definido en el archivo db.js. Además, la función incluye información de los países asociados a cada actividad utilizando el modelo Country.

La función utiliza el método findAll() del modelo Activity para buscar todas las actividades en la base de datos. Además, utiliza la opción include para incluir información de los países asociados a cada actividad en la respuesta. Se especifica el modelo Country y se definen los atributos que se desean incluir en la respuesta. Además, se utiliza la opción through para evitar incluir la tabla intermedia que relaciona los países y las actividades.

Si se encuentran actividades, la función devuelve un array de objetos que representan las actividades encontradas, incluyendo información de los países asociados a cada actividad. Si no se encuentran actividades, la función devuelve un array vacío.

Si se produce un error al llamar a la función findAll(), la función lanza una excepción con el mensaje de error. */

//este código obtiene todas las actividades turísticas de la base de datos y también incluye los países asociados a cada actividad. 
//La función 'getActivity' devuelve los resultados de la consulta, lo que permite acceder a las actividades y sus países asociados desde otros archivos.