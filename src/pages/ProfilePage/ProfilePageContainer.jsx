import React from 'react'
import {connect} from 'react-redux'
import {
  addPost, getProfile,
  updateNewPostText
} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'
import {withRouter} from '../../Hooks/useRouter'

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.router)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.router.params.userId !== this.props.router.params.userId) {
      this.props.getProfile(this.props.router)
    }
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
  addPost, updateNewPostText, getProfile
})(withRouter(ProfilePageContainer))
