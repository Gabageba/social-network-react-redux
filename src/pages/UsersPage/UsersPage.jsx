import React from 'react'
import styles from './UsersPage.module.css'

const UsersPage = () => {
  return (
    <div>
      <div className="contentBlock" style={{padding: 0}}>
        <div className={styles.header}>
          <div className={styles.switchBlock}>
            <p>Друзья</p>
            <p>69</p>
          </div>
          <div className={styles.switchBlock}>
            <p>Все пользователи</p>
            <p>69</p>
          </div>
        </div>
        <input type="text"/>
        <div>

        </div>
      </div>
    </div>
  )
}

export default UsersPage