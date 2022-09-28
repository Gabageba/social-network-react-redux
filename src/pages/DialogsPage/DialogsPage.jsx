import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const DialogsPage = ({messages, dispatch}) => {


  return (
    <div className={`${styles.dialogsPage} contentBlock`}>
      <Dialogs dialogsData={messages.dialogsData}/>
      <Messages messagesData={messages.messagesData}
                newMessageText={messages.newMessageText}
                dispatch={dispatch}/>
    </div>
  )
}

export default DialogsPage