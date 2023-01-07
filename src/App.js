import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  DIALOGS_ROUTE,
  FIND_FRIENDS_ROUTE,
  MUSIC_ROUTE,
  NEWS_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
  FRIENDS_ROUTE, LOGIN_ROUTE,
} from './utils/const'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'
import ProfilePageContainer from './pages/ProfilePage/ProfilePageContainer'
import DialogsPageContainer from './pages/DialogsPage/DialogsPageContainer'
import UsersPageContainer from './pages/UsersPage/UsersPageContainer'
import FriendsPageContainer from './pages/FriendsPage/FriendsPageContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Login from './pages/Login/Login'

const App = ({ state }) => {
  window.state = state

  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <div className='contentCenter'>
          <div className='contentWrapper'>
            <NavbarContainer />
            <div>
              <Routes>
                <Route
                  element={<ProfilePageContainer profile={state.profile} />}
                  path={PROFILE_ROUTE + '/:userId'}
                />
                <Route
                  element={<DialogsPageContainer messages={state.dialogs} />}
                  path={DIALOGS_ROUTE + '/*'}
                />
                <Route element={<FriendsPageContainer />} path={FRIENDS_ROUTE} />
                <Route element={<UsersPageContainer />} path={FIND_FRIENDS_ROUTE} />
                <Route element={<News />} path={NEWS_ROUTE} />
                <Route element={<Music />} path={MUSIC_ROUTE} />
                <Route element={<Settings />} path={SETTINGS_ROUTE} />
                <Route element={<Login />} path={LOGIN_ROUTE} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
