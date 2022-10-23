import {connect} from 'react-redux'
import FriendsPage from './FriendsPage'
import {setFriends} from '../../redux/usersReducer'

const mapStateToProps = (state)  => {
  return {
    friendsData: state.users.friendsData
  }
}


const FriendsPageContainer = connect(mapStateToProps, {
  setFriends
})(FriendsPage)

export default FriendsPageContainer