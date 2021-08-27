import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'flex-end' }}>
        <Button href='/sign-up' color="inherit">Sign Up</Button>
        <Button href='/sign-in' color="inherit">Sign In</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
