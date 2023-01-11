import React from 'react'
import styles from './AvatarBlock.module.css'
import place from '../../../../../social-network-react-redux/src/assets/place.png'
import info from '../../../../../social-network-react-redux/src/assets/info.png'
import defaultAvatar from '../../../assets/noImageLarge.png'
import ProfileStatus from './ProfileStatus'

const AvatarBlock = ({userProfile, coverColor}) => {
  return (
    <div className={styles.avatarBlock}>
      <div className={styles.cover} style={{background: coverColor}}></div>
      <div className={`contentBlock ${styles.infoBlock}`}>
        <div className={styles.mainInfo}>
          <img className={styles.avatar} src={userProfile.photos.large || defaultAvatar} alt=""/>
          <div style={{marginLeft: '16px', width: '300px'}}>
            <h1 className={styles.name}>{userProfile.fullName}</h1>
            <ProfileStatus status={'userProfile.aboutMe'}/>
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