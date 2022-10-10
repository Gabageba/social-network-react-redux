const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  postData: [
    {
      id: 3,
      name: 'Александр Пантелеев',
      avatar: 'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
      message: 'Hello motherfucker'
    },
    {
      id: 2,
      name: 'No name',
      avatar: 'https://a.d-cd.net/1a424f2s-960.jpg',
      message: 'Fuck you'
    },
    {
      id: 1,
      name: 'Хер с горы',
      avatar: 'https://ru-static.z-dn.net/files/d38/45833edf494ba8dc483de2773abc1bf3.png',
      message: 'Хай'
    },
  ],
  newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const lastId = state.postData.slice(0)[0].id
      const newPost = {
        id: lastId + 1,
        name: 'Александр Пантелеев',
        avatar: 'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
        message: state.newPostText
      }
      return {
        ...state,
        postData: [newPost, ...state.postData],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
})
