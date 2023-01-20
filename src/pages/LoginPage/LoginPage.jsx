import React from 'react'
import VkLogoSvg from '../../components/svgFiles/VkLogoSvg'
import styles from './LoginPage.module.css'
import {LoginReduxForm} from './LoginReduxForm/LoginReduxForm'



const LoginPage = ({logIn}) => {
  const onSubmit = (formData) => {
    console.log(formData)
    logIn(formData.login, formData.password, formData.rememberMe)
  }
  return (
    <div className={styles.loginBlock}>
      <div className={`contentBlock ${styles.loginPage}`} style={{marginBottom: '16px'}}>
        <VkLogoSvg bgFill={'#fff'}/>
        <h1 className={styles.loginHeader}>Вход ВКонтакте</h1>
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