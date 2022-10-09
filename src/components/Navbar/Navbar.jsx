import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {DIALOGS_ROUTE, MUSIC_ROUTE, PROFILE_ROUTE, NEWS_ROUTE, SETTINGS_ROUTE, USERS_ROUTE} from '../../utils/const'
import ProfileSvg from '../svgFiles/ProfileSvg'
import NewsSvg from '../svgFiles/NewsSvg'
import MessagesSvg from '../svgFiles/MessagesSvg'
import FriendsSvg from '../svgFiles/FriendsSvg'
import MusicSvg from '../svgFiles/MusicSvg'
import SettingsSvg from '../svgFiles/SettingsSvg'

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <NavLink to={PROFILE_ROUTE} className={styles.block}>
        <ProfileSvg/>
        <div className={styles.link}>Мой профиль</div>
      </NavLink>
      <NavLink to={NEWS_ROUTE} className={styles.block}>
        <NewsSvg/>
        <div className={styles.link}>Новости</div>
      </NavLink>
      <NavLink to={DIALOGS_ROUTE} className={styles.block}>
        <MessagesSvg/>
        <div className={styles.link}>Сообщения</div>
      </NavLink>
      <NavLink to={USERS_ROUTE} className={styles.block}>
        <FriendsSvg/>
        <div className={styles.link}>Пользователи</div>
      </NavLink>
      <NavLink to={MUSIC_ROUTE} className={styles.block}>
        <MusicSvg/>
        <div className={styles.link}>Музыка</div>
      </NavLink>
      <NavLink to={SETTINGS_ROUTE} className={styles.block}>
        <SettingsSvg/>
        <div className={styles.link}>Настройки</div>
      </NavLink>
    </nav>
  )
}

export default Navbar