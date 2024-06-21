// import { useState } from 'react'
import bookLogo from './assets/books.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './Navbar'
import Books from './components/Books'
import Reserve from './components/Reserve'
import ReservedBooks from './components/ReservedBooks'
import Profile from './components/Profile'
import './App.css'
import Return from './components/Return'


function App() {

  return (
    <>
    

   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path = '/' element={<Register/>}/>
      <Route path = 'Login' element = {<Login/>}/>
      <Route path = 'Books' element = {<Books/>}/>
      <Route path = 'Register' element = {<Register/>}/>
      <Route path = 'Reserve' element = {<Reserve/>}/>
      <Route path = 'ReservedBooks' element = {<ReservedBooks/>}/>
      <Route path = 'Profile' element = {<Profile/>}/>
      <Route path = 'Return' element = {<Return/>}/>  
    </Routes>
  
    </BrowserRouter>
    </>
  )
}

export default App
