import {addPost, sendMessage, state, subscribe, updateNewMessageText, updateNewPostText} from './redux/state'
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state}
           addPost={addPost}
           sendMessage={sendMessage}
           updateNewMessageText={updateNewMessageText}
           updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  )
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

