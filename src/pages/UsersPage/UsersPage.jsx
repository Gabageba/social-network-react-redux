import React from 'react'
import styles from './UsersPage.module.css'
import FriendsSwitcher from '../../components/FriendsSwitcher/FriendsSwitcher'
import UserCard from './UserCard/UserCard'
import axios from 'axios'
import Page from '../../components/Page/Page'

class UsersPage extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(users => {
        console.log(users)
        this.props.setUsers(users.data.items)
        this.props.setTotalCount(users.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
      .then(users => {
        console.log(users)
        this.props.setUsers(users.data.items)
        this.props.setTotalCount(users.data.totalCount)
      })
  }


  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    const pages = []
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i + 1)
    }

    const sliceStart = this.props.currentPage < 4 ? 0 : this.props.currentPage - 4
    const slicedPages = [...pages.slice(sliceStart, sliceStart + 7)]

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
          <div className={styles.pages}>
            {
              this.props.currentPage > 4 &&
              <span className={styles.startFinishPage}>
                <Page name={1}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>
                <span>...</span>
              </span>
            }
            {
              slicedPages.map(page => <Page name={page}
                                            currentPage={this.props.currentPage}
                                            key={page}
                                            onPageChanged={this.onPageChanged}/>)
            }
            {
              sliceStart + 7 < pages[pages.length - 1] &&
              <div className={styles.startFinishPage}>
                <span>...</span>
                <Page name={pages.length}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>
              </div>
            }
          </div>
        </div>

        <FriendsSwitcher/>
      </div>
    )
  }
}

export default UsersPage