import React from 'react'
import styles from './DialogsPage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Messages from './Messages/Messages'

const DialogsPage = () => {
  return (
    <div className={styles.dialogsPage + ' ' + 'contentBlock'}>
      <Dialogs />
      <Messages/>
    </div>
  )
}

export default DialogsPage