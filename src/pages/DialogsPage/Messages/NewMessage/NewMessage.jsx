import React from 'react'
import styles from './NewMessage.module.css'
import attach from './../../../../assets/attachment.png'
import SendSvg from '../../../../components/svgFiles/SendSvg'
import {Field, reduxForm} from 'redux-form'


const NewMessageForm = ({handleSubmit}) => {
  return (
    <form className={styles.newMessage} onSubmit={handleSubmit}>
      <label>
        <Field component={'input'} type={'file'} className={styles.attachFileInput} name={'attachFileInput'}/>
        <img src={attach} alt="attach" width={24} height={24} className={styles.button}/>
      </label>
      <Field component={'input'}
             type={'text'}
             className={styles.input}
             placeholder={'Введите новое сообщение'}
             name={'newMessageText'}/>
      <button className={`${styles.button} clearButton`}>
        <SendSvg/>
      </button>
    </form>
  )
}

export const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessageForm)