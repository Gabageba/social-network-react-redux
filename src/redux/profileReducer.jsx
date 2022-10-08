const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  postData: [
    {
      id: 3,
      name: 'Имя Фамилия',
      avatar: 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg',
      message: 'Hello motherfucker'
    },
    {
      id: 2,
      name: 'Александр Пантелеев',
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
    case ADD_POST: {
      const lastId = state.postData.slice(0)[0].id
      const newPost = {
        id: lastId + 1,
        name: 'Имя Фамилия',
        avatar: 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg',
        message: state.newPostText
      }
      const stateCopy = {...state}
      stateCopy.postData = [...state.postData]
      stateCopy.postData.unshift(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }

    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = {...state}
      stateCopy.newPostText = action.text
      return stateCopy
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
