import React from 'react'
import styles from './Navbar.module.css'
import profile from '../../assets/profile.png'
import news from '../../assets/newspapers.png'
import music from '../../assets/music-note.png'
import settings from '../../assets/setting.png'
import message from '../../assets/message.png'
import {NavLink} from 'react-router-dom'
import {DIALOGS_ROUTE, MUSIC_ROUTE, MY_PROFILE_ROUTE, NEWS_ROUTE, SETTINGS_ROUTE} from '../../utils/const'

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <NavLink to={MY_PROFILE_ROUTE} className={styles.block}>
        <img src={profile} alt="profile" className={styles.icon}/>
        <div className={styles.link}>Мой профиль</div>
      </NavLink>
      <NavLink to={NEWS_ROUTE} className={styles.block}>
        <img src={news} alt="news" className={styles.icon}/>
        <div className={styles.link}>Новости</div>
      </NavLink>
      <NavLink to={DIALOGS_ROUTE} className={styles.block}>
        <img src={message} alt="dialogs" className={styles.icon}/>
        <div className={styles.link}>Сообщения</div>
      </NavLink>
      <NavLink to={MUSIC_ROUTE} className={styles.block}>
        <img src={music} alt="music" className={styles.icon}/>
        <div className={styles.link}>Музыка</div>
      </NavLink>
      <NavLink to={SETTINGS_ROUTE} className={styles.block}>
        <img src={settings} alt="settings" className={styles.icon}/>
        <div className={styles.link}>Настройки</div>
      </NavLink>
    </nav>
  )
}

export default Navbar