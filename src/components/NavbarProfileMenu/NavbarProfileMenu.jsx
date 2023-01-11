import React from 'react'
import styles from './NavbarProfileMenu.module.css'
import defaultAvatar from '../../assets/noImageSmall.png'
import NavbarProfileMenuArrowSvg from '../svgFiles/NavbarProfileMenuArrowSvg'
import SettingsSvg from '../svgFiles/SettingsSvg'
import NavbarProfileMenuLink from './NavbarProfileMenuLink/NavbarProfileMenuLink'
import HelpSvg from '../svgFiles/HelpSvg'
import ExitSvg from '../svgFiles/ExitSvg'
import {NavLink} from 'react-router-dom'
import {PROFILE_ROUTE} from '../../utils/const'

const NavbarProfileMenu = ({photo, fullName, email, userId, navbarProfileMenuVisible}) => {
  return (
      <div className={`${styles.navBarProfileMenu} ${navbarProfileMenuVisible ? '' : styles.profileMenuDisable}`}>
        <div className={styles.profileLink}>
          <NavLink className={`contentBlock ${styles.profileInfoBlock}`} to={PROFILE_ROUTE + '/' + userId}>
            <img src={photo || defaultAvatar} alt="avatar" width={40} height={40}/>
            <div className={styles.aboutMe}>
              <h5>{fullName}</h5>
              <p>{email}</p>
            </div>
            <NavbarProfileMenuArrowSvg/>
          </NavLink>
        </div>
        <NavbarProfileMenuLink text={'Настройки'} icon={<SettingsSvg/>}/>
        <NavbarProfileMenuLink text={'Помощь'} icon={<HelpSvg/>}/>
        <NavbarProfileMenuLink text={'Выйти'} icon={<ExitSvg/>}/>
      </div>
  )
}

export default NavbarProfileMenu