import React from 'react'
import Cards from '../../Components/cards/Cards'
import NavBar from '../../Components/navBar/NavBar'
import { useEffect, useState } from 'react'
import { getCountries, getCountriesByName } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/pagination/Pagination'
import SearchBar from '../../Components/searchBar/SearchBar'
import './home.css'

const Home = () => {

  const dispatch = useDispatch()
  const {
    alphabeticalSort,
    populationSort,
    filterByContinent,
    filterByActivity,
    allCountries,
  } = useSelector((state) => ({
    alphabeticalSort: state.alphabeticalSort,
    populationSort: state.populationSort,
    filterByContinent: state.filterByContinent,
    filterByActivity: state.filterByActivity,
    allCountries: state.allCountries,
  }));
  const [searchString, setSearchString] = useState("");
  const [dataToRender, setDataToRender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getCountries())
  }, [])

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountriesByName(searchString));
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let data = [...allCountries];

    if (alphabeticalSort === "asc") {
      data.sort((a, b) => a.name.localeCompare(b.name));
      setCurrentPage(1);
    } else if (alphabeticalSort === "desc") {
      data.sort((a, b) => b.name.localeCompare(a.name));
      setCurrentPage(1);
    }

    if (populationSort === "asc") {
      data.sort((a, b) => a.population - b.population);
      setCurrentPage(1);
    } else if (populationSort === "desc") {
      data.sort((a, b) => b.population - a.population);
      setCurrentPage(1);
    }

    if (filterByContinent) {
      data = data.filter((country) => country.continents === filterByContinent);
      setCurrentPage(1);
    }

    if (filterByActivity) {
      /* data = data.filter((country) =>
        country.Activities.some((act) => act.name === filterByActivity)
      ); */
      data.map((item) => (
        console.log('ITEM: ', item.activities)
      ))
      setCurrentPage(1);
    }

    setDataToRender(data);
  }, [
    alphabeticalSort,
    populationSort,
    filterByContinent,
    filterByActivity,
    allCountries,
  ]);

  const filteredTotalItems = dataToRender.length;
  const filteredTotalPages = Math.ceil(filteredTotalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCountries = dataToRender.slice(startIndex, endIndex);

  return (
    <div className='home'>
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        totalPages={filteredTotalPages}
      />

      <NavBar />
      <Cards allCountries={currentCountries} />
      <Pagination
        className="pagination"
        totalItems={filteredTotalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Home

/*Este componente se utiliza para renderizar la página principal de la aplicación, que muestra una lista de países y permite al usuario filtrar y ordenar los resultados.

El componente utiliza varios hooks de React, como useEffect, useState y useSelector. También utiliza varios componentes personalizados, como Cards, NavBar, Pagination y SearchBar.

El componente utiliza el hook useSelector para obtener el estado actual de la aplicación desde el store de Redux. El estado incluye información sobre el ordenamiento alfabético, el ordenamiento por población, el filtrado por continente, el filtrado por actividad y todos los países.

El componente utiliza el hook useEffect para llamar a la acción getCountries cuando se monta el componente. Esta acción se utiliza para obtener todos los países de la base de datos y almacenarlos en el store de Redux.

El componente utiliza el hook useState para almacenar el valor actual de la cadena de búsqueda del usuario y el conjunto de datos que se va a renderizar en la página.

El componente define varias funciones que se utilizan para manejar los cambios en la cadena de búsqueda del usuario, la paginación y los filtros de ordenamiento y filtrado.

El componente utiliza el componente SearchBar para permitir al usuario buscar países por nombre. El componente NavBar se utiliza para mostrar un menú de navegación en la parte superior de la página. El componente Cards se utiliza para mostrar una lista de países en la página. El componente Pagination se utiliza para permitir al usuario navegar por los resultados de búsqueda. */


/*El hook useDispatch se utiliza para obtener la función dispatch de Redux, que se utiliza para enviar acciones al store de Redux.

El hook useSelector se utiliza para obtener el estado actual de la aplicación desde el store de Redux. En este caso, se obtienen las propiedades alphabeticalSort, populationSort, filterByContinent, filterByActivity y allCountries del estado.

El hook useState se utiliza para definir dos estados locales en el componente: searchString y dataToRender. searchString se utiliza para almacenar la cadena de búsqueda actual del usuario, mientras que dataToRender se utiliza para almacenar el conjunto de datos que se va a renderizar en la página.

El hook useState también se utiliza para definir el estado local currentPage, que se utiliza para almacenar la página actual que se está mostrando en la lista de países.

La constante itemsPerPage se utiliza para definir el número de elementos que se muestran por página en la lista de países. */

/*El hook useEffect se ejecuta cada vez que cambia alguna de las propiedades especificadas en el array de dependencias. En este caso, las propiedades son alphabeticalSort, populationSort, filterByContinent, filterByActivity y allCountries.

El código comienza creando una copia del array allCountries y luego aplica los filtros y el ordenamiento seleccionados por el usuario. Si el usuario ha seleccionado un ordenamiento alfabético ascendente o descendente, se ordena el array data utilizando el método sort() y la función localeCompare() para comparar los nombres de los países. Si el usuario ha seleccionado un ordenamiento por población ascendente o descendente, se ordena el array data utilizando el método sort() y la diferencia entre las poblaciones de los países.

Si el usuario ha seleccionado un filtro por continente, se filtra el array data utilizando el método filter() y la propiedad continents de cada país. Si el usuario ha seleccionado un filtro por actividad, se filtra el array data utilizando el método map() y la propiedad activities de cada país.

Finalmente, el conjunto de datos que se va a renderizar en la página se actualiza utilizando el método setDataToRender() y el array data.

El código también define varias constantes que se utilizan para calcular la paginación de los resultados. La constante filteredTotalItems se utiliza para almacenar el número total de elementos que se van a renderizar en la página. La constante filteredTotalPages se utiliza para almacenar el número total de páginas que se van a renderizar en la página. Las constantes startIndex y endIndex se utilizan para calcular los índices de los elementos que se van a renderizar en la página actual. La constante currentCountries se utiliza para almacenar el conjunto de datos que se va a renderizar en la página actual.

En resumen, este bloque de código utiliza el hook useEffect para actualizar el conjunto de datos que se va a renderizar en la página en función de los filtros y el ordenamiento seleccionados por el usuario. También define varias constantes que se utilizan para calcular la paginación de los resultados. */