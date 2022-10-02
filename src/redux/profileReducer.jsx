const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const lastId = state.postData.slice(0)[0].id
      const newPost = {
        id: lastId + 1,
        name: 'Имя Фамилия',
        avatar: 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg',
        message: state.newPostText
      }
      state.postData.unshift(newPost)
      state.newPostText = ''
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text
      return state

    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
})
