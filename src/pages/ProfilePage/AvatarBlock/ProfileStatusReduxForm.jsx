import React from 'react'
import styles from './AvatarBlock.module.css'
import CompleteSvg from '../../../components/svgFiles/completeSvg'
import {Field, reduxForm} from 'redux-form'

const ProfileStatusForm = ({handleSubmit}) => {
  return (
    <form className={styles.editStatusBlock} onSubmit={handleSubmit}>
      <Field component={'input'} name={'status'}
             type={'text'} autoFocus={true}
             placeholder={'Введите статус'}
             className={`${styles.status} ${styles.editStatus}`}/>
      <button style={{display: 'flex'}}>
        <CompleteSvg />
      </button>
    </form>
  )
}



export const ProfileReduxForm = reduxForm({form: 'profileStatusForm'})(ProfileStatusForm)