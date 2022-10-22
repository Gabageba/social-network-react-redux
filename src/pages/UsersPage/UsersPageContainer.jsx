import {connect} from 'react-redux'
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from '../../redux/usersReducer'
import UsersPageAPI from './UsersPageAPI'

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

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageAPI)

export default UsersPageContainer