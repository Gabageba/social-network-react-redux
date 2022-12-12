import React from 'react'
import { connect } from 'react-redux'
import FriendsPage from './FriendsPage'
import { setCurrentPage, getFriends, unfollowUser } from '../../redux/usersReducer'

class FriendsPageContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage(1)
    this.props.getFriends(1, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getFriends(page, this.props.pageSize)
  }

  unfollow = (userId) => {
    this.props.unfollowUser(userId)
  }

  render() {
    return (
      <FriendsPage
        friendsData={this.props.friendsData}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friendsData: state.users.friendsData,
    pageSize: state.users.friendsPageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isUserFetching,
  }
}

export default connect(mapStateToProps, {
  setCurrentPage,
  getFriends,
  unfollowUser,
})(FriendsPageContainer)
