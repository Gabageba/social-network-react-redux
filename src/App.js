import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import DialogsPage from './pages/DialogsPage/DialogsPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {DIALOGS_ROUTE, MUSIC_ROUTE, NEWS_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE} from './utils/const'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'

const App = ({state,store}) => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className="appWrapper">
          <Navbar/>
          <div className="appContent">
            <Routes>
              <Route element={<ProfilePage profile={state.profile}
                                           addPost={store.addPost.bind(store)}
                                           updateNewPostText={store.updateNewPostText.bind(store)}/>}
                     path={PROFILE_ROUTE}/>
              <Route element={<DialogsPage messages={state.dialogs}
                                           sendMessage={store.sendMessage.bind(store)}
                                           updateNewMessageText={store.updateNewMessageText.bind(store)}/>}
                     path={DIALOGS_ROUTE + '/*'}/>
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