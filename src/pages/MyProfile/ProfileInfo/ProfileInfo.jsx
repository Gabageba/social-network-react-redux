import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={`${styles.profileInfo} contentBlock`}>
      <div className={styles.name}>Имя Фамилия</div>
      <div className={styles.status}>Статус</div>
      <div className={styles.line}/>
      <div className={styles.additionalInfo}>
        <div className={styles.header}>День рождения: </div>
        <div className={styles.content}>13 апреля 2002 г.</div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.header}>Город: </div>
        <div className={styles.content}>Новосибирск</div>
      </div>
      <button className={styles.button}>Показать больше информации</button>
    </div>
  )
}

export default ProfileInfo