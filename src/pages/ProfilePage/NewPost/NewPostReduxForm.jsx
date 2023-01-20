import React from 'react'
import styles from './NewPost.module.css'
import {Field, reduxForm} from 'redux-form'

const NewPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: 'flex'}}>
        <img className={styles.avatar}
             src="https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg"
             alt="Avatar"/>
        <Field placeholder={'Что нового чел?'}
               component={'textarea'}
               name={'newPostText'}
               autoFocus={true}
               className={`${styles.input} ${styles.newPostText}`}/>
      </div>
      <div style={{textAlign: 'right'}}>
        <button className={styles.postButton}>Опубликовать</button>
      </div>
    </form>
  )
}

export const NewPostReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm)