import React from 'react'
import Card from '../card/Card'
import './cards.css'

const Cards = ({ allCountries }) => {
   return (
      <div className='cards-list'>
         {
            allCountries.map((country) => (
               <Card
                  id={country.id}
                  flags={country.flags}
                  name={country.name}
                  continents={country.continents}
               />
            ))
         }
      </div>
   )
}

export default Cards

/*En resumen, este bloque de código define el componente Cards que muestra una lista de tarjetas de países. El componente recibe una prop allCountries que es un array de objetos que representan los países. El componente utiliza la función map para iterar sobre el array de países y renderizar una tarjeta de país para cada objeto de país. */