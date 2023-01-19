import React from 'react'
import styles from './Header.module.css'
import LogoSvg from '../svgFiles/LogoSvg'
import HeaderProfileLink from './HeaderProfileLink/HeaderProfileLink'

const Header = ({isAuth, photo, fullName, email, setNavbarProfileMenuVisible, navbarProfileMenuVisible, userId}) => {
  return (
    <header className={styles.header}>
      <div className="contentCenter" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
        <LogoSvg/>
        <div className={styles.loginBlock}>
          {isAuth && <HeaderProfileLink photo={photo}
                                 fullName={fullName}
                                 email={email} setNavbarProfileMenuVisible={setNavbarProfileMenuVisible}
                                 navbarProfileMenuVisible={navbarProfileMenuVisible}
                                 userId={userId}
            />
          }
        </div>
      </div>
    </header>
  )
}

export default Header