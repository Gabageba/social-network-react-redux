import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReducer'
import {modalsReducer} from './modalsReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  //объеденить reducer
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  modals: modalsReducer
})

export const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)
