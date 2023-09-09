import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Team from './Components/Team/Team'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import Register from './Components/Register/Register'
import Demands from './Components/Demands/Demands'
import Contact from './Components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/demands' element={<Demands />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App