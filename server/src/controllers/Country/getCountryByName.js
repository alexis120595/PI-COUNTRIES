const {Op} = require('sequelize')
const {Country} = require('../../db')

const getCountryByName = async(name)=>{     //toma un parametro name que es el nombre del país que se desea buscar
    
    try {
        const filteredCountry = await Country.findAll({     //usamos findAll del modelo Country para buscar todos los países que cumplan con la condición especifiada en el objeto where
            where:{
                name:{
                    [Op.iLike]:`%${name}%`
                }
            }
        })

        return filteredCountry.length>0 ? filteredCountry : new Error('Country not Found'); //el resultado de la busqueda se asigna a la variable filteredCountry
        
    } catch (error) {
        throw error.message;
    }

}

module.exports={getCountryByName}

/*La función utiliza el modelo Country definido en el archivo db.js para buscar todos los países que contengan el nombre especificado en el parámetro name. Para hacer esto, se utiliza el método findAll() del modelo Country y se especifica una condición en el objeto where para buscar los países cuyo nombre contenga la cadena especificada en el parámetro name.

La condición utiliza el operador Op.iLike de Sequelize para realizar una búsqueda insensible a mayúsculas y minúsculas. La cadena %${name}% se utiliza para buscar cualquier país que contenga la cadena especificada en cualquier parte de su nombre.

Si se encuentran países que coinciden con la búsqueda, la función devuelve un array de objetos que representan los países encontrados. Si no se encuentran países, la función devuelve un objeto Error con un mensaje de error.

Si se produce un error al llamar a la función findAll(), la función lanza una excepción con el mensaje de error.

*/ 

//este código busca países en la base de datos que coincidan parcialmente con un nombre especificado y los devuelve como resultado. 