import React from 'react'
import styles from './NewMessage.module.css'
import attach from './../../../../assets/attachment.png'
import send from './../../../../assets/send.png'


const NewMessage = ({newMessageText, updateNewMessageText, sendMessage}) => {
  return (
    <div className={styles.newMessage}>
      <img src={attach} alt="attach"/>
      <input className={styles.input}
             placeholder={'Введите новое сообщение'}
             onChange={e => updateNewMessageText(e.target.value)}
             value={newMessageText}/>
      <img src={send} alt="send" onClick={sendMessage}/>
    </div>
  )
}

export default NewMessage