import React from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'

class NavbarContainer extends React.Component {
  render() {
    return <Navbar {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(NavbarContainer)