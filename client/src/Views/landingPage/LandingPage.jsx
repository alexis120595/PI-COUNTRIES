import React from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'

const LandingPage = () => {
  return (
    <div className='start-container'>
      <Link to='/home' className='start-link'>
        <button className='start-button'>  Home</button>
      </Link>
    </div>
  )
}

export default LandingPage

/*  El componente se utiliza para renderizar una página de inicio que contiene un botón que redirige al usuario a la página de inicio de la aplicación.

El componente utiliza la biblioteca react-router-dom para crear un enlace que redirige al usuario a la ruta /home cuando se hace clic en el botón. El botón se renderiza dentro de un contenedor con la clase CSS start-container.

El botón se define como un elemento Link que envuelve un botón HTML. El botón se renderiza con el texto "Home" y la clase CSS start-button. Cuando se hace clic en el botón, el usuario es redirigido a la ruta /home.

El componente se exporta como un componente por defecto, lo que significa que se puede importar y utilizar en otros archivos de la aplicación.*/