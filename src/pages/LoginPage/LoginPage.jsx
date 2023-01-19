import React from 'react'
import {Field, reduxForm} from 'redux-form'
import VkLogoSvg from '../../components/svgFiles/VkLogoSvg'
import styles from './LoginPage.module.css'
import QuestionsSvg from '../../components/svgFiles/QuestionsSvg'

const LoginForm = ({handleSubmit}) => {
  return (
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <Field placeholder={'Логин'} name={'login'} component={'input'} type={'text'} />
        </div>
        <div>
          <Field placeholder={'Пароль'} name={'password'} component={'input'} type={'text'} />
        </div>
        <div className={styles.checkboxBlock}>
          {/*<CheckboxSvg/>*/}
          <Field className={styles.loginCheckbox} id='loginCheckbox' type="checkbox" name={'rememberMe'} component={'input'} />
          <label htmlFor='loginCheckbox'>Сохранить вход</label>
          <span className={styles.questions}>
            <QuestionsSvg/>
          </span>
        </div>
        <div>
          <button className={styles.loginButton}>Войти</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const LoginPage = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={styles.loginBlock}>
      <div className={`contentBlock ${styles.loginPage}`} style={{marginBottom: '16px'}}>
        <VkLogoSvg bgFill={'#fff'}/>
        <h1 class={styles.loginHeader}>Вход ВКонтакте</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
      <div className={`contentBlock ${styles.loginPage}`}>
        <button className={styles.registrationButton}>Зарегистрироваться</button>
        <p className={styles.afterRegistration}>После регистрации вы получите доступ ко всем возможностям VK ID</p>
      </div>
    </div>
  )
}


export default LoginPage