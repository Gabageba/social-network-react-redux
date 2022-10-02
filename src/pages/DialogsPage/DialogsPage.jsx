import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const DialogsPage = ({messages, store}) => {


  return (
    <div className={`${styles.dialogsPage} contentBlock`}>
      <Dialogs dialogsData={messages.dialogsData}/>
      <Messages messagesData={messages.messagesData}
                store={store}/>
    </div>
  )
}

export default DialogsPage