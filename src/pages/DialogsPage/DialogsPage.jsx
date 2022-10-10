import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const DialogsPage = ({dialogsData, messagesData, newMessageText, updateNewMessageText, sendMessage}) => {


  return (
    <div className={`${styles.dialogsPage} contentBlock`}>
      <Dialogs dialogsData={dialogsData}/>
      <Messages messagesData={messagesData}
                updateNewMessageText={updateNewMessageText}
                sendMessage={sendMessage}
                newMessageText={newMessageText}/>
    </div>
  )
}

export default DialogsPage