import React from 'react'
import defaultAvatar from '../../../assets/noImageSmall.png'
import ProfileArrowSvg from '../../svgFiles/profileArrowSvg'
import styles from './HeaderProfileLink.module.css'
import NavbarProfileMenu from '../../NavbarProfileMenu/NavbarProfileMenu'

const HeaderProfileLink = ({photo, fullName, email, setNavbarProfileMenuVisible, navbarProfileMenuVisible, userId}) => {
  return (
    <div style={{position: 'relative', marginRight: '2px'}}>
      <div className={styles.profileLink} onClick={() => setNavbarProfileMenuVisible(!navbarProfileMenuVisible)} style={{backgroundColor: `${navbarProfileMenuVisible ? '#323232' : 'transparent'}`}}>
        <img src={photo || defaultAvatar} alt="Avatar" width={32} height={32}/>
        <ProfileArrowSvg/>
      </div>
      {
        navbarProfileMenuVisible
          ? <NavbarProfileMenu photo={photo} fullName={fullName} email={email} userId={userId}/>
          : null
      }
    </div>
  )
}

export default HeaderProfileLink