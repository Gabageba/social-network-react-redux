import {connect} from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC
} from '../../redux/usersReducer'
import React from 'react'
import axios from 'axios'
import UsersPage from './UsersPage'

class UsersPageContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(users => {
        this.props.setUsers(users.data.items)
        this.props.setTotalCount(users.data.totalCount)
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
      .then(users => {
        this.props.setUsers(users.data.items)
        this.props.setTotalCount(users.data.totalCount)
        this.props.setIsFetching(false)
      })
  }


  render() {
    return <UsersPage currentPage={this.props.currentPage}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      usersData={this.props.usersData}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}/>
  }
}


const mapStateToProps = (state)  => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.usersPageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
    setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer)

