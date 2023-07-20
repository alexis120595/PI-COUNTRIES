import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Views/home/Home'
import Detail from './Views/detail/Detail'
import Form from './Views/form/Form'
import LandingPage from './Views/landingPage/LandingPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
  
    <div>
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        
    </div>
      
  );
}

export default App;