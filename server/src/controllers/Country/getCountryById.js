const {Country, Activity} = require('../../db')

const getCountryById = async(id) => {

     try {
           
        const country = await Country.findOne({
            where:{id},
            include: {
                model: Activity,
                attributes: ['name', 'dificulty', 'duration', 'season'],
                through: { attributes: [] }
              }
        
        })
    
        return country

    } catch (error) {
        throw error
    }
}

module.exports = {
    getCountryById
}

/*La función utiliza el modelo Country definido en el archivo db.js para buscar un país por su ID. Para hacer esto, se utiliza el método findOne() del modelo Country y se especifica una condición en el objeto where para buscar el país con el ID especificado en el parámetro id.

La función también utiliza la opción include para incluir las actividades asociadas al país en la respuesta. Se especifica el modelo Activity y se definen los atributos que se desean incluir en la respuesta. Además, se utiliza la opción through para evitar incluir la tabla intermedia que relaciona los países y las actividades.

Si se encuentra el país, la función devuelve un objeto que representa el país encontrado, incluyendo las actividades asociadas. Si no se encuentra el país, la función devuelve un objeto null.

Si se produce un error al llamar a la función findOne(), la función lanza una excepción con el mensaje de error. */

//este código busca un país en la base de datos utilizando su ID y devuelve el país encontrado o 'null' si no se encuentra