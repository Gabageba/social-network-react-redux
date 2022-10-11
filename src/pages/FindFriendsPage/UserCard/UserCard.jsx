import React from 'react'
import AddFriendSvg from '../../../components/svgFiles/AddFriendSvg'
import styles from './UserCard.module.css'

const UserCard = () => {
  return (
    <div className={styles.userCard}>
      <img width={160} height={160} style={{borderRadius: '3px'}}
           src="https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg" alt="Avatar"/>
      <div className={styles.infoBlock}>
        <p className={styles.name}>Имя фамилия</p>
        <AddFriendSvg/>
      </div>
    </div>
  )
}

export default UserCard