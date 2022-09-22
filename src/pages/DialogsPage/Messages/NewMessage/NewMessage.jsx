import React from 'react'
import styles from './NewMessage.module.css'
import attach from './../../../../assets/attachment.png'
import send from './../../../../assets/send.png'

const NewMessage = ({sendMessage}) => {

  let messageRef = React.createRef()

  return (
    <div className={styles.newMessage}>
      <img src={attach} alt="attach"/>
      <input ref={messageRef} className={styles.input} placeholder={'Введите новое сообщение'}></input>
      <img src={send} alt="send" onClick={sendMessage}/>
    </div>
  )
}

export default NewMessage