import React from 'react'
import styles from './Messages.module.css'
import Message from './Message/Message'
import NewMessage from './NewMessage/NewMessage'

const Messages = ({messagesData, sendMessage}) => {

  let prev = ''

  return (
    <div className={styles.messages}>
      <div className={styles.infoBlock}>
        <div className={styles.name}>Имя Фамилия</div>
      </div>
      {
        messagesData.map(message => {
          if (prev === message.userId) {
            return <Message key={message.id} message={message} showUser={false}/>
          } else {

           prev = message.userId
            return <Message key={message.id} message={message} showUser={true}/>
          }
        })
      }
     <NewMessage sendMessage={sendMessage}/>
    </div>
  )
}

export default Messages