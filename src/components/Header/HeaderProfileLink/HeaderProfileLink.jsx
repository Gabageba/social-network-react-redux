import React from 'react'
import defaultAvatar from '../../../assets/noImageSmall.png'
import ProfileArrowSvg from '../../svgFiles/profileArrowSvg'
import styles from './HeaderProfileLink.module.css'

const HeaderProfileLink = ({photo, fullName}) => {
  return (
    <div className={styles.profileLink}>
      <img src={photo || defaultAvatar} alt="Avatar" width={32} height={32}/>
      <ProfileArrowSvg/>
    </div>
  )
}

export default HeaderProfileLink