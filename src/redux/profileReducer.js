import {FastAverageColor} from 'fast-average-color'
import {profileAPI} from '../api/api'
import defaultAvatar from '../assets/noImageLarge.png'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_IS_PROFILE_FETCHING = 'SET_IS_PROFILE_FETCHING'
const SET_COVER_COLOR = 'SET_COVER_COLOR'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  postData: [
    {
      id: 3,
      name: 'Александр Пантелеев',
      avatar: 'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
      message: 'Hello motherfucker',
    },
    {
      id: 2,
      name: 'No name',
      avatar: 'https://a.d-cd.net/1a424f2s-960.jpg',
      message: 'Fuck you',
    },
    {
      id: 1,
      name: 'Хер с горы',
      avatar: 'https://ru-static.z-dn.net/files/d38/45833edf494ba8dc483de2773abc1bf3.png',
      message: 'Хай',
    },
  ],
  userProfile: null,
  isProfileFetching: false,
  coverColor: '#fff',
  status: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const lastId = state.postData.slice(0)[0].id
      const newPost = {
        id: lastId + 1,
        name: 'Александр Пантелеев',
        avatar: 'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
        message: action.newPostText,
      }
      return {
        ...state,
        postData: [newPost, ...state.postData]
      }
    case SET_USER_PROFILE:
      return {...state, userProfile: action.userProfile}
    case SET_IS_PROFILE_FETCHING:
      return {...state, isProfileFetching: action.isFetching}
    case SET_COVER_COLOR:
      return {...state, coverColor: action.color}
    case SET_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }
}

export const getProfile = (userId = 2) => {
  return (dispatch) => {
    const fac = new FastAverageColor()
    dispatch(setIsProfileFetching(true))
    profileAPI.getProfile(userId).then((profile) => {
      dispatch(setUserProfile(profile))
      fac
        .getColorAsync(
          profile.photos.large
            ? `https://cors-anywhere.herokuapp.com/${profile.photos.large}`
            : defaultAvatar,
        )
        // fac.getColorAsync(profile.photos.large ? profileAPI.getImage(profile.photos.large) : defaultAvatar)
        .then((color) => {
          dispatch(setCoverColor(color.hex))
          dispatch(setIsProfileFetching(false))
        })
        .catch((e) => {
          console.log(e)
        })
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data))
      })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
  }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setIsProfileFetching = (isFetching) => ({type: SET_IS_PROFILE_FETCHING, isFetching})
export const setCoverColor = (color) => ({type: SET_COVER_COLOR, color})
export const setStatus = (status) => ({type: SET_STATUS, status})
