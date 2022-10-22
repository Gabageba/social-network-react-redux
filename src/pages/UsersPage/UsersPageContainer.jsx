import {connect} from 'react-redux'
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from '../../redux/usersReducer'
import React from 'react'
import axios from 'axios'
import UsersPage from './UsersPage'

class UsersPageContainer extends React.Component {

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


const mapStateToProps = (state)  => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.usersPageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer)

