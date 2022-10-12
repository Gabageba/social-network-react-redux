import React from 'react'
import styles from './Friend.module.css'

const Friend = ({friend}) => {
  return (
      <div className={styles.friendBlock}>
        <img src={friend.img} width={80} height={80} alt="avatar"/>
        <div className={styles.infoBlock}>
          <h5>{friend.name}</h5>
          <p>Написать сообщение</p>
        </div>
      </div>

  )
}

export default Friend