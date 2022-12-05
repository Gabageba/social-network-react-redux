import {connect} from 'react-redux'
import {
  follow,
  setCurrentPage, setIsUserFetching,
  setTotalCount,
  setUsers, toggleFollowingProgress,
  unfollow
} from '../../redux/usersReducer'
import React from 'react'
import UsersPage from './UsersPage'
import {usersAPI} from '../../api/api'


class UsersPageContainer extends React.Component {

  componentDidMount() {
    this.props.setIsUserFetching(true)
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(users => {
      this.props.setUsers(users.items)
      this.props.setTotalCount(users.totalCount)
      this.props.setIsUserFetching(false)
    })
  }

  onPageChanged = (page) => {
    this.props.setIsUserFetching(true)
    this.props.setCurrentPage(page)
    usersAPI.getUsers(this.props.pageSize, page).then(users => {
      this.props.setUsers(users.items)
      this.props.setTotalCount(users.totalCount)
      this.props.setIsUserFetching(false)
    })
  }

  followUser = (userId) => {
    this.props.toggleFollowingProgress(true, userId)
    !this.props.followingInProgress.some(id => id === userId) && usersAPI.followUser(userId)
      .then(response => {
      if (response.resultCode === 0) {
        this.props.follow(userId)
      }
    })
      .finally(() => this.props.toggleFollowingProgress(false, userId))
  }

  unfollowUser = (userId) => {
    this.props.toggleFollowingProgress(true, userId)
    !this.props.followingInProgress.some(id => id === userId) && usersAPI.unfollowUser(userId)
      .then(response => {
        if (response.resultCode === 0) {
          this.props.unfollow(userId)
        }
      })
      .finally(() => this.props.toggleFollowingProgress(false, userId))
  }


  render() {
    return <UsersPage currentPage={this.props.currentPage}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      usersData={this.props.usersData}
                      unfollowUser={this.unfollowUser}
                      followUser={this.followUser}
                      isFetching={this.props.isFetching}
    />
  }
}


const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.usersPageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isUserFetching,
    followingInProgress: state.users.followingInProgress
  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsUserFetching, toggleFollowingProgress
})(UsersPageContainer)

