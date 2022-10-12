import React from 'react'
import styles from './FriendsPage.module.css'
import FriendsHeader from './FriendsHeader/FriendsHeader'
import Friend from './Friend/Friend'
import FriendsSwitcher from '../../components/FriendsSwitcher/FriendsSwitcher'

const FriendsPage = ({friendsData}) => {
  console.log(friendsData)
  return (
    <div className={styles.usersPage}>
      <div className={`contentBlock ${styles.leftBlock}`} style={{padding: 0}}>
        <FriendsHeader/>
        <input type="text" placeholder={'Поиск друзей'} className={styles.input}/>
        <div className={styles.friendsList}>
          {
            friendsData.map(friend => {
              return <Friend friend={friend}/>
            })
          }
        </div>
      </div>
      <FriendsSwitcher/>
    </div>
  )
}

export default FriendsPage