import React from 'react'
// import Sidebar from './components/sidebar/Sidebar'
// import Main from './components/main/Main'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import MainGtpComponents from './components/main/MainGtpComponents'
import Faq from './components/Faq'

function App() {
  return (
  <>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/gtpresponce" element={<MainGtpComponents />}/>
    <Route  path='/helplearnmore' element={<Faq/>}/>
    </Routes>

  {/* <Sidebar/>

  <Main/> */}
  </>
  )
}

export default App
