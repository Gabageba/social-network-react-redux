import React from 'react'
import styles from './NewMessage.module.css'
import attach from './../../../../assets/attachment.png'
import send from './../../../../assets/send.png'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dialogsReducer'


const NewMessage = ({newMessageText, dispatch}) => {
  return (
    <div className={styles.newMessage}>
      <img src={attach} alt="attach"/>
      <input className={styles.input}
             placeholder={'Введите новое сообщение'}
             onChange={e => dispatch(updateNewMessageTextActionCreator(e.target.value))}
             value={newMessageText}/>
      <img src={send} alt="send" onClick={() => dispatch(sendMessageActionCreator())}/>
    </div>
  )
}

export default NewMessage