import React from 'react'
import styles from './NewMessage.module.css'
import attach from './../../../../assets/attachment.png'
import send from './../../../../assets/send.png'

const NewMessage = ({newMessageText, dispatch}) => {

  return (
    <div className={styles.newMessage}>
      <img src={attach} alt="attach"/>
      <input className={styles.input}
             placeholder={'Введите новое сообщение'}
             onChange={e => dispatch({type: 'UPDATE_NEW_MESSAGE_TEXT', text: e.target.value})}
             value={newMessageText}/>
      <img src={send} alt="send" onClick={() => dispatch({type: 'SEND_MESSAGE'})}/>
    </div>
  )
}

export default NewMessage