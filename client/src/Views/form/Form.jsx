import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { postActivity } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios, { all } from 'axios'
import './form.css'

const Form = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries)
  // const countries = useSelector((state) => state.countries);
  const [form, setForm] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
    countries: "",
  })

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [property]: value
    })
    validate({
      ...form,
      [property]: value
    })
    setForm({
      ...form,
      [property]: value
    })


    /* setInput({
       
      ...input,
       [e.target.name]: e.target.value
     })
     validate({
       ...input,
       [e.target.name]: e.target.value
     })*/
  }

  const [error, setError] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
    countries: [],
  })

  const validate = (form) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.post('http://localhost:3001/activities', form)
    //.then(res=>alert("res"))
    console.log('Payload para endpoint: ', form)
    dispatch(postActivity(form))
    alert('Actividad creada')
    setForm({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      countries: []
    })
  }
  /*const handleCountrySelect = (countryId) => {
    const selectedCountries = form.countries.includes(countryId)
      ? form.countries.filter((id) => id !== countryId)
      : [...form.countries, countryId];
    setForm({ ...form, countries: selectedCountries });
    //setValidationErrors({ ...validationErrors, countries: "" });
  };
  */

  return (
    <div>
      <Link to='/home'>
        <button>Volver al home</button>
      </Link>
      <h1>Crea tu actividad </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type='text'
            value={form.name}
            name='name'
            onChange={handleChange} />
        </div>

        <div>
          <label>Dificultad</label>
          <select name='dificulty' onChange={handleChange}>
            <option value="dificulty">Dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

        </div>

        <div>
          <label>Duración</label>
          <select name='duration' onChange={handleChange}>
            <option value="time">Horas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>


        </div>

        <div>
          <label>Temporada</label>
          <select name='season' onChange={handleChange}>
            <option value="All">Estaciones</option>
            <option value="Winter">Invierno</option>
            <option value="Spring">Primavera</option>
            <option value="Summer">Verano</option>
            <option value="Fall">Otoño</option>
          </select>

        </div>
        <label>Pais</label>
        <select name='countries' onChange={(e) => handleChange(e)}>
          {allCountries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>

        <div>


        </div>

        <button type='submit' >Crear Actividad</button>

      </form>


    </div>
  )
}

export default Form

/*El componente define el estado local form que se utiliza para almacenar los valores de los campos del formulario de creación de actividades. También define el estado local error que se utiliza para almacenar los errores de validación de los campos del formulario.

El componente utiliza la función handleChange para manejar los cambios en los campos del formulario. La función actualiza el estado local form con el valor actual del campo utilizando el método setForm(). También llama a la función validate para validar el campo actualizado.

El componente utiliza la función handleSubmit para enviar la acción postActivity al store de Redux cuando el usuario envía el formulario de creación de actividades. La acción se utiliza para crear una nueva actividad en la base de datos y almacenarla en el store de Redux.

El componente también utiliza el hook useSelector para obtener el estado actual de la aplicación desde el store de Redux. En este caso, se obtiene la propiedad allCountries del estado. */