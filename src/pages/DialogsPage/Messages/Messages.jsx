import React from 'react'
import styles from './Messages.module.css'
import Message from './Message/Message'
import {NewMessageReduxForm} from './NewMessage/NewMessage'

const Messages = ({messagesData, sendMessage}) => {
  let prev = ''
  const onSendMessage = (formData) => sendMessage(formData.newMessageText)

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
      <NewMessageReduxForm onSubmit={onSendMessage}/>
    </div>
  )
}

export default Messages