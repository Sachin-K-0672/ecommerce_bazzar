import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Header from './Components/Header'
import './assets/styles/mystyle.css'
import ViewMore from './Components/ViewMore'
import CartItems from './Components/CartItems'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from "./components/Register";


// npx json-server --watch src/jsondata/appdata.json --port 4000  (command for create api using json server)

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<ViewMore/>} path='/viewmore/:id'/>

        <Route element={<h2 style={{color:"red"}}>Page Not Found</h2>} path='/*'/>
        <Route element= {<CartItems/>} path='/cart-items'/>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        

        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
