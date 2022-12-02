import React from 'react'
import Header from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthUserData, setAuthUserInfo} from '../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login)

          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(profile => {
              const {fullName, photos} = profile.data
              this.props.setAuthUserInfo(fullName, photos.small)
            })
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  fullName: state.auth.fullName,
  photo: state.auth.photo
})

export default connect(mapStateToProps, {setAuthUserData, setAuthUserInfo})(HeaderContainer)