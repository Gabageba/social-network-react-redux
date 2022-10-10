import React from 'react'
import styles from './UsersHeader.module.css'

const UsersHeader = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.switchBlock} ${styles.active}`}>
        <h4>Друзья</h4>
        <p>69</p>
      </div>
      <div>
        <button className={styles.findButton}><span>Найти друзей</span></button>
      </div>
    </div>
  )
}

export default UsersHeader