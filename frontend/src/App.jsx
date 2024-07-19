import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './pages/Banner'
import Course from './pages/Course'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './Components/Footer'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp'
const App = () => {
  return (
   <>

  
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Banner/>} />
    <Route path='/course' element={<Course/> } />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<SignUp/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
