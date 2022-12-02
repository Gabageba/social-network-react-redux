import { combineReducers, createStore } from 'redux'
import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'
import { usersReducer } from './usersReducer'
import {authReducer} from './authReducer'

const reducers = combineReducers({
  //объеденить reducer
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer
})

export const store = createStore(reducers)
