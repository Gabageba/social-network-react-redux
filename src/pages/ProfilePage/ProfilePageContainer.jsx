import React from 'react'
import {connect} from 'react-redux'
import {
  addPost, getProfile, getStatus,
  updateNewPostText, updateStatus
} from '../../redux/profileReducer'
import ProfilePage from './ProfilePage'
import {withRouter} from '../../Hooks/useRouter'
import {compose} from 'redux'

class ProfilePageContainer extends React.Component {
  state = {
    postWriting: false
  }

  userId = this.props.router.params.userId

  setPostWriting = (bool) => {
    this.setState({
      postWriting: bool
    })
  }

  componentDidMount() {
    this.props.getProfile(this.userId)
    this.props.getStatus(this.userId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.router.params.userId !== this.userId) {
      this.props.getProfile(this.props.router)
    }
  }

  render() {
    return <ProfilePage {...this.props} updateStatus={this.props.updateStatus} postWriting={this.state.postWriting} setPostWriting={this.setPostWriting}/>
  }
}

const mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    postData: state.profile.postData,
    userProfile: state.profile.userProfile,
    isFetching: state.profile.isProfileFetching,
    coverColor: state.profile.coverColor,
    status: state.profile.status
  }
}

export default compose(
  connect(mapStateToProps, {
    addPost, updateNewPostText, getProfile, getStatus, updateStatus
  }),
  withRouter,
  // withAuthRedirect,
)(ProfilePageContainer)

