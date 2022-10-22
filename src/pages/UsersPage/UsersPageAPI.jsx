import React from 'react'
import axios from 'axios'
import UsersPage from './UsersPage'

class UsersPageAPI extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(users => {
        this.props.setUsers(users.data.items)
        this.props.setTotalCount(users.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
      .then(users => {
        this.props.setUsers(users.data.items)
        this.props.setTotalCount(users.data.totalCount)
      })
  }


  render() {
    return <UsersPage currentPage={this.props.currentPage}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      usersData={this.props.usersData}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}/>
  }
}

export default UsersPageAPI