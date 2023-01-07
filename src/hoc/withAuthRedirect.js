import {Navigate} from 'react-router-dom'
import {LOGIN_ROUTE} from '../utils/const'
import React from 'react'
import {connect} from 'react-redux'

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={LOGIN_ROUTE}/>
      return <Component {...this.props} />
    }
  }

  const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  })

  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}