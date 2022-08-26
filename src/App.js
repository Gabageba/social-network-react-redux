import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './pages/MyProfile/MyProfile'
import DialogsPage from './pages/DialogsPage/DialogsPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {DIALOGS_ROUTE, MUSIC_ROUTE, MY_PROFILE_ROUTE, NEWS_ROUTE, SETTINGS_ROUTE} from './utils/const'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className="appWrapper">
          <Navbar/>
          <div className="appContent">
            <Routes>
              <Route element={<MyProfile/>} path={MY_PROFILE_ROUTE}/>
              <Route element={<DialogsPage/>} path={DIALOGS_ROUTE}/>
              <Route element={<News/>} path={NEWS_ROUTE}/>
              <Route element={<Music/>} path={MUSIC_ROUTE}/>
              <Route element={<Settings/>} path={SETTINGS_ROUTE}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App