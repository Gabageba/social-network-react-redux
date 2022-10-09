import React from 'react'
import styles from './AvatarBlock.module.css'
import place from '../../../../../social-network-react-redux/src/assets/place.png'
import info from '../../../../../social-network-react-redux/src/assets/info.png'

const AvatarBlock = () => {
  return (
    <div className={styles.avatarBlock}>
      <div className={styles.cover}></div>
      <div className={`contentBlock ${styles.infoBlock}`}>
        <div className={styles.mainInfo}>
          <img className={styles.avatar} src="https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg" alt=""/>
          <div style={{marginLeft: '16px'}}>
            <h1 className={styles.name}>Александр Пантелеев</h1>
            <p className={styles.status}>🤟</p>
            <div className={styles.additionalInfoButton}>
              <div className={styles.additionalInfo}>
                <img width={20} height={20} src={place} alt="Place"/>
                <p>Новосибирск</p>
              </div>
              <div className={styles.additionalInfo}>
                <img width={20} height={20} src={info} alt="Place"/>
                <p>Подробнее</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>Редактировать профиль</button>
        </div>

      </div>
    </div>
  )
}

export default AvatarBlock