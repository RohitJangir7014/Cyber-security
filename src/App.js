import React from 'react'
import Tipsg from './components/Tipsg'
import Tips from './components/Tips'
import Sigh from './components/Sigh'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Certifications from './components/Certifications'
import Header from './components/Header'
import Login from './components/Login'
import About from './components/About'
import Couse from './components/Couse'
import Contect from './components/Contect'

const App = () => {
  return (
    <div> 
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Tipsg/>}/>
    <Route path='/Tips'element={<Tips/>}/>
    <Route path='/Sign'element={<Sigh/>}/>
    <Route path='/Login'element={<Login/>}/>
    <Route path='/couse'element={<Couse/>}/>
    <Route path='/About'element={<About/>}/>
    <Route path='/contect'element={<Contect/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App