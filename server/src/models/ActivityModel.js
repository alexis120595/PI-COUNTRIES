const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty:{
      type:DataTypes.ENUM,
      values:['1','2','3','4','5'],
      allowNull:false
    },
    duration:{
      type:DataTypes.STRING,
    },
    season:{ 
      type:DataTypes.ENUM,
      values:['Summer','Fall','Winter','Spring'],
      allowNull:false
    }
  },{
    timestamps:false,
    freezeTableName:true
  });
};

/*El modelo define los campos de la tabla Activity y sus tipos de datos utilizando el objeto DataTypes de Sequelize. Los campos definidos son id, name, difficulty, duration y season.

El campo id es un campo autoincremental de tipo entero que se utiliza como clave primaria de la tabla. El campo name es una cadena de texto que representa el nombre de la actividad y no puede ser nulo. El campo difficulty es un campo de enumeración que representa la dificultad de la actividad y solo puede tener valores entre 1 y 5. El campo duration es una cadena de texto que representa la duración de la actividad. El campo season es un campo de enumeración que representa la temporada en la que se realiza la actividad y solo puede tener valores de "Summer", "Fall", "Winter" o "Spring".

El modelo también define opciones adicionales para la tabla, como timestamps:false para desactivar la creación automática de campos de fecha y hora, y freezeTableName:true para evitar que Sequelize pluralice el nombre de la tabla.*/ 