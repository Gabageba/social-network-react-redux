import React from 'react'
import styles from './UsersHeader.module.css'
import {NavLink} from 'react-router-dom'
import {FIND_FRIENDS_ROUTE} from '../../../utils/const'

const UsersHeader = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.switchBlock} ${styles.active}`}>
        <h4>Друзья</h4>
        <p>69</p>
      </div>
      <div>
        <NavLink to={FIND_FRIENDS_ROUTE}>
          <button className={styles.findButton}><span>Найти друзей</span></button>
        </NavLink>
      </div>
    </div>
  )
}

export default UsersHeader