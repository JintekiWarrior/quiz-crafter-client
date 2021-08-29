import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// component makes sure no one can access the auth routes unless signed in
const AuthRoute = ({ user, component: Component, render, ...rest }) => {
  if (user && render) {
    console.log('there is a user')
    return <Route {...rest} render={render} />
  } else {
    console.log('no user')
    return <Route {...rest} render={props =>
      user ? <Component {...props} /> : <Redirect to='/' />
    } />
  }
}

export default AuthRoute
