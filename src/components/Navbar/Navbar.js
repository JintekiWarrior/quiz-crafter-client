import React, { Fragment } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  link: {
    margin: '1rem'
  },

  navBar: {
    marginBottom: '2rem'
  }
})

const Navbar = ({ user }) => {
  const classes = useStyles()

  const signedIn = (
    <Fragment>
      <Link
        className={classes.link}
        component={RouterLink}
        to='/change-password'
        color='inherit'
      >
        Change Password
      </Link>
      <Link
        className={classes.link}
        component={RouterLink}
        to='/sign-out'
        color='inherit'
      >
        Sign Out
      </Link>
    </Fragment>
  )

  const notSignedIn = (
    <Fragment>
      <Link
        className={classes.link}
        component={RouterLink}
        to='/sign-up'
        color='inherit'
      >
        Sign Up
      </Link>
      <Link
        className={classes.link}
        component={RouterLink}
        to='/sign-in'
        color='inherit'
      >
        Sign In
      </Link>
    </Fragment>
  )

  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar style={{ justifyContent: 'flex-end' }}>
        {user ? signedIn : notSignedIn}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
