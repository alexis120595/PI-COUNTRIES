import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryById } from '../../Redux/actions'
import NavBar from '../../Components/navBar/NavBar'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './detail.css'

const Detail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const country = useSelector((state) => state.countryDetail)

  useEffect(() => {
    dispatch(getCountryById(id))
  }, [id])

  console.log(country)
  return (
    <div className='first-container' >


      <div className='second-container'>

        <Link to='/home' className='start-link'>
          <button className='start-button'>  Home</button>
        </Link>

        <img src={country?.flags} alt="flag" className='imagen' />
        <h4>ID: {country?.id}</h4>
        <h4>Name: {country?.name}</h4>
        <h4>Capital: {country?.capital}</h4>
        <h4>Continent: {country?.continents}</h4>
        <h4>Subregion: {country?.subregion}</h4>
        <h4>Area: {country?.area}</h4>
        <h4>Population: {country?.population}</h4>
        <div>
          {country && country.Activities && (
            country?.Activities.map((act) => {
              return (
                <>
                  <div>{act.name}</div>
                  <div>{act.dificulty}</div>
                  <div>{act.season}</div>
                  <div>{act.duration}</div>
                </>
              )
            })
          )
          }
        </div>
      </div>

    </div>



  )
}

export default Detail

/*El componente utiliza la función useParams para obtener el parámetro id de la URL. Este parámetro se utiliza para obtener los detalles del país utilizando la acción getCountryById del store de Redux.

El componente utiliza el hook useSelector para obtener el estado actual de la aplicación desde el store de Redux. En este caso, se obtiene la propiedad countryDetail del estado.

El componente utiliza la función useEffect para llamar a la acción getCountryById del store de Redux cada vez que cambia el parámetro id.

El componente muestra los detalles del país utilizando los valores de las propiedades del objeto country. También muestra las actividades asociadas al país utilizando el método map() para iterar sobre el array de actividades y mostrar sus detalles. */