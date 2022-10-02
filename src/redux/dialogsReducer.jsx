const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const lastId = state.messagesData.slice(-1)[0].id
      const newMessage = {
        id: lastId + 1,
        userId: 2,
        userImg: 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg',
        userName: 'Имя фамилия',
        message: state.newMessageText
      }
      state.messagesData.push(newMessage)
      state.newMessageText = ''
      return state

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text
      return state

    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text
})


