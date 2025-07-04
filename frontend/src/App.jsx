import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Navbar/Header/Header';
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] =  useState(false)

  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App
