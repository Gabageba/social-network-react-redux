import React from 'react'
import styles from './Friend.module.css'

const Friend = ({user}) => {
  return (
      <div className={styles.friendBlock}>
        <img src={user.photo} width={80} height={80} alt="avatar"/>
        <div className={styles.infoBlock}>
          <h5>{user.name}</h5>
          <p>Написать сообщение</p>
        </div>
      </div>

  )
}

export default Friend