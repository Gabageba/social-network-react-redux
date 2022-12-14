import React from 'react'
import styles from './Messages.module.css'
import Message from './Message/Message'
import NewMessage from './NewMessage/NewMessage'

const Messages = ({messagesData, newMessageText, updateNewMessageText, sendMessage}) => {

  let prev = ''

  return (
    <div className={styles.messages}>
      <div className={styles.infoBlock}>
        <h4 className={styles.name}>Имя Фамилия</h4>
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
     <NewMessage newMessageText={newMessageText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>
    </div>
  )
}

export default Messages