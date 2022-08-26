import React from 'react'
import styles from './Navbar.module.css'
import profile from '../../assets/profile.png'
import news from '../../assets/newspapers.png'
import music from '../../assets/music-note.png'
import settings from '../../assets/setting.png'
import {NavLink} from 'react-router-dom'
import {DIALOGS_ROUTE, MUSIC_ROUTE, MY_PROFILE_ROUTE, NEWS_ROUTE, SETTINGS_ROUTE} from '../../utils/const'

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.block}>
        <img src={profile} alt="profile" className={styles.icon}/>
        <NavLink to={MY_PROFILE_ROUTE}  className={styles.link}>Мой профиль</NavLink>
      </div>
      <div className={styles.block}>
        <img src={news} alt="dialogs" className={styles.icon}/>
        <NavLink to={DIALOGS_ROUTE} className={styles.link}>Сообщения</NavLink>
      </div>
      <div className={styles.block}>
        <img src={news} alt="news" className={styles.icon}/>
        <NavLink to={NEWS_ROUTE} className={styles.link}>Новости</NavLink>
      </div>
      <div className={styles.block}>
        <img src={music} alt="music" className={styles.icon}/>
        <NavLink to={MUSIC_ROUTE} className={styles.link}>Музыка</NavLink>
      </div>
      <div className={styles.block}>
        <img src={settings} alt="settings" className={styles.icon}/>
        <NavLink to={SETTINGS_ROUTE} className={styles.link}>Настройки</NavLink>
      </div>
    </nav>
  )
}

export default Navbar