import React, { Fragment } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Navbar = ({ user }) => {
  const signedIn = (
    <Fragment>
      <Link
        component={RouterLink}
        to='/change-password'
        color='inherit'
      >Change Password</Link>
      <Link
        component={RouterLink}
        to='/sign-out'
        color='inherit'
      >Sign Out</Link>
    </Fragment>
  )

  const notSignedIn = (
    <Fragment>
      <Link
        component={RouterLink}
        to='/sign-up'
        color='inherit'
      >Sign Up</Link>
      <Link
        component={RouterLink}
        to='/sign-in'
        color='inherit'
      >Sign In</Link>
    </Fragment>
  )

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'flex-end' }}>
        {user ? signedIn : notSignedIn}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
