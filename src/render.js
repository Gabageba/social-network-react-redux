import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from './redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (state) => {
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

