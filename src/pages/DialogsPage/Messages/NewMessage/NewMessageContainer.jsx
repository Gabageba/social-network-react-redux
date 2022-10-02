import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dialogsReducer'
import NewMessage from './NewMessage'


const NewMessageContainer = ({store}) => {

  const state = store.getState()

  const onMessageChange = (text) => {
    store.dispatch(updateNewMessageTextActionCreator(text))
  }
  const sendMessage = () => {
    store.dispatch(sendMessageActionCreator())
  }

  return <NewMessage onMessageChange={onMessageChange}
               sendMessage={sendMessage}
               newMessageText={state.dialogs.newMessageText}/>
}

export default NewMessageContainer