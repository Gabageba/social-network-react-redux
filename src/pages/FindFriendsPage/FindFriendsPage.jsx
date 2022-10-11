import React from 'react'
import styles from './FindFriendsPage.module.css'
import FriendsSwitcher from '../../components/FriendsSwitcher/FriendsSwitcher'
import UserCard from './UserCard/UserCard'

const FindFriendsPage = () => {
  return (
    <div className={styles.findFriendPage}>
      <div className={`contentBlock ${styles.users}`}>
        <div className={styles.header}>
          <h4>Поиск друзей</h4>
        </div>
        <input type="text" placeholder={'Введите запрос'} className={styles.input}/>
        <div className={styles.cards}>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
      </div>
      <FriendsSwitcher/>
    </div>
  )
}

export default FindFriendsPage