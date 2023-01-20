import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'
import {Navigate} from 'react-router-dom'
import {LOGIN_ROUTE} from '../../utils/const'

const DialogsPage = ({dialogsData, messagesData, sendMessage, isAuth}) => {

  if (!isAuth) return <Navigate to={LOGIN_ROUTE}/>

  return (
    <div className={`${styles.dialogsPage} contentBlock`}>
      <Dialogs dialogsData={dialogsData}/>
      <Messages messagesData={messagesData}
                sendMessage={sendMessage}/>
    </div>
  )
}

export default DialogsPage