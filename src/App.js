import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './pages/MyProfile/MyProfile'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <MyProfile/>
    </div>
  )
}

export default App