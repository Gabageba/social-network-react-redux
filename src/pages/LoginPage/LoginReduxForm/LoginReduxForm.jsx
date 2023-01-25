import styles from '../LoginPage.module.css'
import {Field, reduxForm} from 'redux-form'
import React from 'react'
import RememberMeQuestions from './RememberMeQuestions/RememberMeQuestions'
import {LoginInput} from '../../../components/FormsControls/FormsControls'
import {required, strongPassword} from '../../../utils/validators'

const LoginForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div>
        <Field placeholder={'Логин'} name={'login'} component={LoginInput} type={'text'} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={'Пароль'} name={'password'} component={LoginInput} type={'password'} validate={[required, strongPassword]}/>
      </div>
      <div className={styles.checkboxBlock}>
        <Field className={styles.loginCheckbox} id='rememberMe' type="checkbox" name={'rememberMe'} component={'input'} />
        <label htmlFor='rememberMe'>Сохранить вход</label>
        <RememberMeQuestions/>
      </div>
      <div>
        <button className={styles.loginButton}>Войти</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)