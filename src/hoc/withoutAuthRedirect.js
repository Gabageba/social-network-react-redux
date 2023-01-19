import {Navigate} from 'react-router-dom'
import {PROFILE_ROUTE} from '../utils/const'
import React from 'react'
import {connect} from 'react-redux'

export const withoutAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth) return <Navigate to={`${PROFILE_ROUTE}/${this.props.userId}`}/>
      return <Component {...this.props} />
    }
  }

  const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  })

  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}