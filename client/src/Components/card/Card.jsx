import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({id, name, flags, continents}) => {
  return(
      <div className='card-container'>
          <Link to={`/detail/${id}`}>
          <img src={flags} alt="imgFlag" className='mainImage' />
          </Link>
        
          <h3>Name: {name}</h3>
        
          <h3>Continents: {continents}</h3>
      </div>
  )
}

export default Card

/* El componente Card recibe las propiedades id, name, flags y continents que representan la información del país. El componente utiliza estas propiedades para renderizar una tarjeta de país que contiene una imagen de la bandera del país, el nombre del país y los continentes a los que pertenece.

El componente Card utiliza el componente Link de react-router-dom para crear un enlace a la página de detalles del país. La propiedad to del componente Link se establece en /detail/${id} donde id es la propiedad id del país.

En resumen, este bloque de código define el componente Card que muestra una tarjeta de país. El componente recibe las propiedades id, name, flags y continents que representan la información del país. El componente utiliza estas propiedades para renderizar una tarjeta de país que contiene una imagen de la bandera del país, el nombre del país y los continentes a los que pertenece. El componente utiliza el componente Link de react-router-dom para crear un enlace a la página de detalles del país.*/