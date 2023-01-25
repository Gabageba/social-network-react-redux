import React from 'react'
import styles from './NewPost.module.css'
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from '../../../utils/validators'
import {NewPostTextarea} from '../../FormsControls/FormsControls'

const maxLength100 = maxLength(100)

const NewPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={NewPostTextarea}
               placeholder={'Что нового чел?'}
               name={'newPostText'}
               autoFocus={true}
               validate={[required, maxLength100]}
               className={`${styles.input} ${styles.newPostText}`} />
      </div>
      <div className={`contentBlock ${styles.postButtonBlock}`}>
        <button className={styles.postButton}>Опубликовать</button>
      </div>
    </form>
  )
}

export const NewPostReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm)