import React from 'react'
import styles from './RememberMeQuestions.module.css'
import QuestionsSvg from '../../../../components/svgFiles/QuestionsSvg'

const RememberMeQuestions = () => {
  return (
    <div className={styles.questions}>
      <QuestionsSvg/>
      <div className={`contentBlock ${styles.answerBlock}`}>
        <h5>Сохранить вход</h5>
        <p>При повторной авторизации вы сможете войти в аккаунт в один клик
        </p>
      </div>
    </div>
  )
}

export default RememberMeQuestions