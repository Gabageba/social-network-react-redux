import React from 'react'
import styles from './FriendsSwitcher.module.css'

const FriendsSwitcher = () => {
  return (
    <div className={`contentBlock ${styles.friendsSwitcher}`}>
      <div className={styles.button}>
        <h4>Мои друзья</h4>
      </div>
      <div className={styles.button}>
        <h4>Поиск друзей</h4>
      </div>
    </div>
  )
}

export default FriendsSwitcher