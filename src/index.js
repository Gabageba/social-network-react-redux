import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import {store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state}
           dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  )
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))

