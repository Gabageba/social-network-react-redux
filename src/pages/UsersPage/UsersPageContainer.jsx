import { connect } from 'react-redux'
import { followUser, getUsers, setCurrentPage, unfollowUser } from '../../redux/usersReducer'
import React from 'react'
import UsersPage from './UsersPage'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

class UsersPageContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize)
  }

  render() {
    return (
      <UsersPage
        currentPage={this.props.currentPage}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        usersData={this.props.usersData}
        unfollowUser={this.props.unfollowUser}
        followUser={this.props.followUser}
        isFetching={this.props.isFetching}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    pageSize: state.users.usersPageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isUserFetching,
  }
}

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UsersPageContainer)
