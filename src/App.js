import './App.scss'
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthRoute from './components/AuthRoute/AuthRoute'
import Navbar from './components/Navbar/Navbar'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import ChangePassword from './components/ChangePassword/ChangePassword'
import SignOut from './components/SignOut/SignOut'
import Home from './components/Home/Home'

// material ui components
// import Container from '@material-ui/core/Container'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { user: null }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })


  render () {
    const { user } = this.state

    return (
      <Fragment>
        <Navbar user={user} />
        <Route path='/sign-up' render={() => (
          <SignUp user={user} setUser={this.setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn  user={user} setUser={this.setUser} />
        )} />
        <AuthRoute user={user} path='/change-password' render={() => (
          <ChangePassword user={user} />
        )} />
        <AuthRoute user={user} path='/sign-out' render={() => (
          <SignOut user={user} clearUser={this.clearUser} />
        )} />
        <AuthRoute user={user} path='/home' render={() => (
          <Home user={user} />
        )} />
      </Fragment>
    )
  }
}

export default App
