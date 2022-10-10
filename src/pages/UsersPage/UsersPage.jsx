import React from 'react'
import styles from './UsersPage.module.css'
import UsersHeader from './UsersHeader/UsersHeader'
import Friend from './Friend/Friend'

const UsersPage = () => {
  return (
    <div>
      <div className={`contentBlock ${styles.leftBlock}`} style={{padding: 0}}>
        <UsersHeader/>
        <input type="text" placeholder={'Поиск друзей'} className={styles.input}/>
        <div className={styles.friendsList}>
          <Friend user={{name: 'No name', photo: 'https://a.d-cd.net/1a424f2s-960.jpg'}}/>
          <Friend user={{name: 'No name', photo: 'https://a.d-cd.net/1a424f2s-960.jpg'}}/>
          <Friend user={{name: 'No name', photo: 'https://a.d-cd.net/1a424f2s-960.jpg'}}/>
        </div>
      </div>
    </div>
  )
}

export default UsersPage