import React from 'react'
import styles from './Avatar.module.css'

const Avatar = () => {
  return (
    <div className={`${styles.avaBlock} contentBlock`}>
      <img className={styles.avatar} src="https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg" alt=""/>
      <button className={styles.editButton}>Редактировать</button>
    </div>
  )
}

export default Avatar