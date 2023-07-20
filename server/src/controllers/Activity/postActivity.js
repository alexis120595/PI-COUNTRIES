const {Activity} = require('../../db')


const postActivity = async(name,dificulty,duration,season,countries) => {
    const activity = await Activity.create({
        name,
        dificulty,
        duration,
        season,    
    });
    if (countries.length >= 1) activity.addCountries(countries);

    if(!activity) throw new Error(`actividad no creada con el ${nombre}`)
    return activity
}

module.exports = {
    postActivity
}

/*La función se utiliza para crear una nueva actividad en la base de datos relacional utilizando el modelo Activity definido en el archivo db.js.

La función toma cinco parámetros: name, difficulty, duration, season y countries. Los primeros cuatro parámetros representan el nombre, la dificultad, la duración y la temporada de la actividad, respectivamente. El último parámetro es un array de IDs de países asociados a la actividad.

La función utiliza el método create() del modelo Activity para crear una nueva actividad en la base de datos con las propiedades especificadas en los parámetros. Se devuelve un objeto que representa la actividad creada.

Si el parámetro countries tiene una longitud mayor o igual a 1, se utiliza el método addCountries() del objeto activity para asociar los países especificados a la actividad. El método addCountries() es un método generado automáticamente por Sequelize que se utiliza para agregar registros a la tabla intermedia que relaciona los países y las actividades.

Si no se puede crear la actividad, la función lanza una excepción con un mensaje de error. */

//este código crea una actividad turística en la base de datos, la asocia a uno o varios países y devuelve la actividad creada como resultado. 
//También realiza validaciones en los parámetros y realiza algunas transformaciones antes de realizar las operaciones en la base de datos.