import React from 'react'
import  {connect} from 'react-redux'
import {addPost, setUserProfile, updateNewPostText} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'
import axios from 'axios'

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(profile => {
        this.props.setUserProfile(profile.data)
      })
  }

  render() {
    return <ProfilePage {...this.props}/>
  }

}

const mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    postData: state.profile.postData,
    userProfile: state.profile.userProfile
  }
}


export default connect(mapStateToProps, {
  addPost, updateNewPostText, setUserProfile
})(ProfilePageContainer)
