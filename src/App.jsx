import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/navbars/navbar.mui/navbar.component'
import MyNavBar from './components/navbars/navbar.boostrap/navbar/navbar.component'
import NavScroll from './components/navbars/navbar.boostrap/navbar.scroll/navbar.component'
import CustomNavBar from './components/navbars/custom-navbar/my-navbar.component'

function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <MyNavBar/>
      <NavScroll />
      <CustomNavBar />
    </>
  )
}

export default App
