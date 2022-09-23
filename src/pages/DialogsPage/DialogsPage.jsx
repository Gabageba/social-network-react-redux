import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const DialogsPage = ({messages, sendMessage, updateNewMessageText}) => {


  return (
    <div className={`${styles.dialogsPage} contentBlock`}>
      <Dialogs dialogsData={messages.dialogsData}/>
      <Messages messagesData={messages.messagesData}
                sendMessage={sendMessage}
                newMessageText={messages.newMessageText}
                updateNewMessageText={updateNewMessageText}/>
    </div>
  )
}

export default DialogsPage