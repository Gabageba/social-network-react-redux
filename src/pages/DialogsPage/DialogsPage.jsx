import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const DialogsPage = ({messages, sendMessage}) => {


  return (
    <div className={`${styles.dialogsPage} contentBlock`}>
      <Dialogs dialogsData={messages.dialogsData}/>
      <Messages messagesData={messages.messagesData} sendMessage={sendMessage}/>
    </div>
  )
}

export default DialogsPage