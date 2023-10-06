import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import PropsSample from './Products'
export default function Myroute() {
  return (
  
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/products' element={<PropsSample/>}/>
  </Routes>
  </BrowserRouter>
  )
}
