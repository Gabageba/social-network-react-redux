import {connect} from 'react-redux'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'

const mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    postData: state.profile.postData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)


export default ProfilePageContainer