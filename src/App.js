import './App.scss'
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

// material ui components
import Container from '@material-ui/core/Container'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar />
        <Container maxWidth="sm">
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={SignIn} />
        </Container>
      </Fragment>
    )
  }
}

export default App
