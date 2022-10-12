import {connect} from 'react-redux'
import FriendsPage from './FriendsPage'
import {setFriendsAC} from '../../redux/usersReducer'

const mapStateToProps = (state)  => {
  return {
    friendsData: state.users.friendsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFriends: (friends) => dispatch(setFriendsAC(friends))
  }
}

const FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage)

export default FriendsPageContainer