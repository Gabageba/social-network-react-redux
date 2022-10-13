import React from 'react'
import styles from './UsersPage.module.css'
import FriendsSwitcher from '../../components/FriendsSwitcher/FriendsSwitcher'
import UserCard from './UserCard/UserCard'
import axios from 'axios'

const UsersPage = ({usersData, follow, unfollow, setUsers}) => {

  if (usersData.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(users => setUsers(users.data.items))

  }

  return (
    <div className={styles.findFriendPage}>
      <div className={`contentBlock ${styles.users}`}>
        <div className={styles.header}>
          <h4>Поиск друзей</h4>
        </div>
        <input type="text" placeholder={'Введите запрос'} className={styles.input}/>
        <div className={styles.cards}>
          {
            usersData.map(user => {
              return <UserCard key={user.id} user={user} follow={follow} unfollow={unfollow}/>
            })
          }
        </div>
      </div>
      <FriendsSwitcher/>
    </div>
  )
}

export default UsersPage