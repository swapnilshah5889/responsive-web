import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/navbars/navbar.mui/navbar.component'
import MyNavBar from './components/navbars/navbar.boostrap/navbar.component'


function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <MyNavBar/>
    </>
  )
}

export default App
