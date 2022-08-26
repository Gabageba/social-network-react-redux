import React from 'react'
import styles from './Message.module.css'

const Message = ({showUser, message}) => {
  return (
    <div className={styles.message}>
      {
        showUser ?
          <div>
            <img src={message.userImg} alt=""/>
          </div>
          :
          <div>

          </div>

      }

    </div>
  )
}

export default Message