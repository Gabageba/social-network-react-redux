import React from 'react'
import {connect} from 'react-redux'
import {
  addPost,
  setCoverColor,
  setIsProfileFetching,
  setUserProfile,
  updateNewPostText
} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'
import {withRouter} from '../../Hooks/useRouter'
import {FastAverageColor} from 'fast-average-color'
import defaultAvatar from '../../assets/noImageLarge.png'
import {profileAPI} from '../../api/api'

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    const fac = new FastAverageColor()
    this.props.setIsProfileFetching(true)
    const userId = this.props.router.params.userId || 2
    profileAPI.getProfile(userId)
      .then(profile => {
        this.props.setUserProfile(profile)
        fac.getColorAsync(profile.photos.large ? `https://cors-anywhere.herokuapp.com/${profile.photos.large}` : defaultAvatar)
          .then(color => {
            this.props.setCoverColor(color.hex)
            this.props.setIsProfileFetching(false)
          })
          .catch(e => {
            console.log(e)
          })
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
