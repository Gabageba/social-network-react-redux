import React from 'react'
import styles from './AvatarBlock.module.css'
import place from '../../../../../social-network-react-redux/src/assets/place.png'
import info from '../../../../../social-network-react-redux/src/assets/info.png'

const AvatarBlock = ({userProfile}) => {
  return (
    <div className={styles.avatarBlock}>
      <div className={styles.cover}></div>
      <div className={`contentBlock ${styles.infoBlock}`}>
        <div className={styles.mainInfo}>
          <img className={styles.avatar} src={userProfile.photos.large} alt=""/>
          <div style={{marginLeft: '16px'}}>
            <h1 className={styles.name}>{userProfile.fullName}</h1>
            <p className={styles.status}>{userProfile.aboutMe}</p>
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
          <button className={styles.editButton}>Редактировать профиль</button>
        </div>

      </div>
    </div>
  )
}

export default AvatarBlock