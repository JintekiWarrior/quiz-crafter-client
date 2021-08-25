import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'flex-end' }}>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
