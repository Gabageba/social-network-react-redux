import React from 'react'
import styles from './NewMessage.module.css'
import attach from './../../../../assets/attachment.png'
import SendSvg from '../../../../components/svgFiles/SendSvg'


const NewMessage = ({newMessageText, updateNewMessageText, sendMessage}) => {
  return (
    <div className={styles.newMessage}>
      <img src={attach} alt="attach" width={24} height={24} className={styles.buttons}/>
      <input className={styles.input}
             placeholder={'Введите новое сообщение'}
             onChange={e => updateNewMessageText(e.target.value)}
             value={newMessageText}/>
      <div className={styles.buttons}>
        <div onClick={sendMessage}>
          <SendSvg/>
        </div>
      </div>

    </div>
  )
}

export default NewMessage