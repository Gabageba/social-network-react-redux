import React from 'react'
import styles from './UsersPage.module.css'
import FriendsSwitcher from '../../components/FriendsSwitcher/FriendsSwitcher'
import UserCard from './UserCard/UserCard'
import axios from 'axios'

class UsersPage extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(users => this.props.setUsers(users.data.items))
  }

  render() {
    return (
      <div className={styles.findFriendPage}>
        <div className={`contentBlock ${styles.users}`}>
          <div className={styles.header}>
            <h4>Поиск друзей</h4>
          </div>
          <input type="text" placeholder={'Введите запрос'} className={styles.input}/>
          <div className={styles.cards}>
            {
              this.props.usersData.map(user => {
                return <UserCard key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow}/>
              })
            }
          </div>
        </div>
        <FriendsSwitcher/>
      </div>
    )
  }
}

export default UsersPage