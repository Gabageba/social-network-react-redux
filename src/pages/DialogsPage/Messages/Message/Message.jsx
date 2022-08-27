import React from 'react'
import styles from './Message.module.css'

const Message = ({showUser, message}) => {
  return (
    <div className={styles.messages}>
      {
        showUser ?
          <div className={`${styles.message} ${styles.messageIndents}`} >
            <img src={message.userImg} alt="" className={styles.avatar}/>
            <div className={styles.text}>
              <span className={styles.name}>{message.userName}</span>
              <div className={styles.messageText}>{message.message}</div>
            </div>
          </div>
          :
          <div className={styles.message}>
            <div className={`${styles.messageText} ${styles.text}`}>{message.message}</div>
          </div>
      }
    </div>
  )
}

export default Message