import {connect} from 'react-redux'
import {followAC, setUsersAC, unfollowAC} from '../../redux/usersReducer'
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
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default UsersPageContainer