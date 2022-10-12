import {connect} from 'react-redux'
import {followAC, unfollowAC} from '../../redux/usersReducer'
import UsersPage from './UsersPage'

const mapStateToProps = (state)  => {
  return {
    usersData: state.users.usersData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(unfollowAC(users))
  }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default UsersPageContainer