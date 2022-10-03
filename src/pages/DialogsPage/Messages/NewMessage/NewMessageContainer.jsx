import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dialogsReducer'
import NewMessage from './NewMessage'
import {StoreContext} from '../../../../StoreContext'


const NewMessageContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState()
          const onMessageChange = (text) => store.dispatch(updateNewMessageTextActionCreator(text))
          const sendMessage = () => store.dispatch(sendMessageActionCreator())

          return <NewMessage onMessageChange={onMessageChange}
                             sendMessage={sendMessage}
                             newMessageText={state.dialogs.newMessageText}/>
        }
      }
    </StoreContext.Consumer>
    )
}

export default NewMessageContainer