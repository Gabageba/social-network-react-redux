import React from 'react'
import {compose} from 'redux'
import LoginPage from './LoginPage'
import {withoutAuthRedirect} from '../../hoc/withoutAuthRedirect'
import {connect} from 'react-redux'
import {logIn} from '../../redux/authReducer'

class LoginPageContainer extends React.Component {
  render() {
    return <LoginPage {...this.props}/>
  }
}

const mapStateToProps = ()  => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, {
    logIn
  }),
  withoutAuthRedirect
)(LoginPageContainer)