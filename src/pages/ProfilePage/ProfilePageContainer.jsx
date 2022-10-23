import React from 'react'
import  {connect} from 'react-redux'
import {
  addPost,
  setCoverColor,
  setIsProfileFetching,
  setUserProfile,
  updateNewPostText
} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'
import axios from 'axios'
import {withRouter} from '../../Hooks/useRouter'
import {FastAverageColor} from 'fast-average-color'
import defaultAvatar from '../../assets/noImageLarge.png'

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    const fac = new FastAverageColor()
    this.props.setIsProfileFetching(true)
    const userId = this.props.router.params.userId || 2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(profile => {
        this.props.setUserProfile(profile.data)
        fac.getColorAsync(profile.data.photos.large ? `https://cors-anywhere.herokuapp.com/${profile.data.photos.large}` : defaultAvatar)
          .then(color => {
            this.props.setCoverColor(color.hex)
            this.props.setIsProfileFetching(false)
          })
          .catch(e => {
            console.log(e);
          });
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
    userProfile: state.profile.userProfile,
    isFetching: state.profile.isProfileFetching,
    coverColor: state.profile.coverColor
  }
}



export default connect(mapStateToProps, {
  addPost, updateNewPostText, setUserProfile, setIsProfileFetching, setCoverColor
})(withRouter(ProfilePageContainer))
