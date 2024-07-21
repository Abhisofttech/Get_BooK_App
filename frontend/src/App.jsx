import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './pages/Banner'
import Course from './pages/Course'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './Components/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(JSON.stringify(authUser));
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/course' element={authUser ? <Course /> : <Navigate to='/signup' />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
