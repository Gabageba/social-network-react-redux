import React from 'react'
import styles from './FormControl.module.css'
import TextareaAutosize from 'react-textarea-autosize'

export const NewPostTextarea = ({input, meta, ...props}) => {
  return (
    <div style={{display: 'flex'}} className={`contentBlock ${styles.newPostTextarea}`}>
      <img className={styles.avatar}
           src="https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg"
           alt="Avatar"/>
      <TextareaAutosize  {...input} {...props} minRows={2}/>
    </div>
  )
}

export const LoginInput = ({input, meta, ...props}) => {
  return (
    <div>
      <input type="text"
             className={meta.touched && meta.error ? styles.loginInputError : undefined}  {...input} {...props}/>

      <div className={styles.loginInputErrorMessage}>
        {
          meta.error && meta.touched
            ? meta.error
            : undefined
        }
      </div>

    </div>
  )
}