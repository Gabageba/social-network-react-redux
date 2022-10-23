import  {connect} from 'react-redux'
import {addPost, updateNewPostText} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'

const mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    postData: state.profile.postData
  }
}


const ProfilePageContainer = connect(mapStateToProps, {
  addPost, updateNewPostText
})(ProfilePage)


export default ProfilePageContainer