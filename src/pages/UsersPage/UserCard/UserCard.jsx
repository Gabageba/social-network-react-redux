import React from 'react'
import AddFriendSvg from '../../../components/svgFiles/AddFriendSvg'
import styles from './UserCard.module.css'

const UserCard = ({user}) => {
  return (
    <div className={styles.userCard}>
      <img width={160} height={160} style={{borderRadius: '3px'}}
           src={user.img} alt="Avatar"/>
      <div className={styles.infoBlock}>
        <p className={styles.name}>{user.name}</p>
        <AddFriendSvg/>
      </div>
    </div>
  )
}

export default UserCard