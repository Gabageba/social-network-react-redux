import React from 'react'
import styles from './FriendsSwitcher.module.css'
import {FIND_FRIENDS_ROUTE, FRIENDS_ROUTE} from '../../utils/const'
import {NavLink, useLocation} from 'react-router-dom'

const FriendsSwitcher = () => {
  const location = useLocation()

  return (
    <div className={`contentBlock ${styles.friendsSwitcher}`}>
      <NavLink to={FRIENDS_ROUTE} className={`${styles.button} ${location.pathname === FRIENDS_ROUTE ? styles.activeButton : ''}`}>
        <h4>Мои друзья</h4>
      </NavLink>
      <NavLink to={FIND_FRIENDS_ROUTE} className={`${styles.button} ${location.pathname === FIND_FRIENDS_ROUTE ? styles.activeButton : ''}`}>
        <h4>Поиск друзей</h4>
      </NavLink>
    </div>
  )
}

export default FriendsSwitcher