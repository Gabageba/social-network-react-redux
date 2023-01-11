import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {setAuthUserData, setAuthUserInfo} from '../../redux/authReducer'
import {authAPI, profileAPI} from '../../api/api'

class HeaderContainer extends React.Component {

  state = {
    navbarProfileMenuVisible: false
  }
  setNavbarProfileMenuVisible = (bool) => {
    this.setState({
      navbarProfileMenuVisible: bool
    })
  }

  componentDidMount() {
    authAPI.auth()
      .then(response => {
        if (response.resultCode === 0) {
          const {id, email, login} = response.data
          this.props.setAuthUserData(id, email, login)

          profileAPI.getProfile(id)
            .then(profile => {
              const {fullName, photos} = profile
              this.props.setAuthUserInfo(fullName, photos.small)
            })
        }
      })
  }

  render() {
    return <Header {...this.props} navbarProfileMenuVisible={this.state.navbarProfileMenuVisible} setNavbarProfileMenuVisible={this.setNavbarProfileMenuVisible}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  fullName: state.auth.fullName,
  photo: state.auth.photo,
  email: state.auth.email,
  userId: state.auth.userId
})

export default connect(mapStateToProps, {
  setAuthUserData,
  setAuthUserInfo
})(HeaderContainer)