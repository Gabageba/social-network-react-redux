const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
  dialogsData: [
    {
      id: 1,
      name: 'Ноу Нейм',
      img: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      name: 'No name',
      img: 'https://a.d-cd.net/1a424f2s-960.jpg'
    },
    {
      id: 3,
      name: 'Хер с горы',
      img: 'https://ru-static.z-dn.net/files/d38/45833edf494ba8dc483de2773abc1bf3.png'
    },
    {
      id: 4,
      name: 'Конч за 500',
      img: 'https://www.blast.hk/attachments/64805/'
    }
  ],
  messagesData: [
    {
      id: 1,
      userId: 1,
      userImg: 'https://a.d-cd.net/1a424f2s-960.jpg',
      userName: 'No name',
      message: 'блять'
    },
    {
      id: 2,
      userId: 1,
      userImg: 'https://a.d-cd.net/1a424f2s-960.jpg',
      userName: 'No name',
      message: 'иди в пизду'
    },
    {
      id: 3,
      userId: 2,
      userImg: 'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
      userName: 'Александр Пантелеев',
      message: 'такая залупа'
    },
    {
      id: 4,
      userId: 1,
      userImg: 'https://a.d-cd.net/1a424f2s-960.jpg',
      userName: 'No name',
      message: '123'
    },
  ],
  newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const lastId = state.messagesData.slice(-1)[0].id
      const newMessage = {
        id: lastId + 1,
        userId: 2,
        userImg: 'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
        userName: 'Александр Пантелеев',
        message: state.newMessageText
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }
    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text
})


