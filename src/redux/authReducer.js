import {authAPI} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_INFO = 'SET_USER_INFO'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  fullName: null,
  photo: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case SET_USER_INFO: {
      return {
        ...state,
        ...action.data
      }
    }
    default:
      return state
  }
}

export const logIn = (email, password, rememberMe, captcha) => {
  console.log(email, password)
  return (dispatch) => {
    authAPI.logIn(email, password, rememberMe, captcha).then(response => {
      console.log(response)
    })
  }
}

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {userId, email, login}
})

export const setAuthUserInfo = (fullName, photo) => ({
  type: SET_USER_INFO,
  data: {fullName, photo}
})