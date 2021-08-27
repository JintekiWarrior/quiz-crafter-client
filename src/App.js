import './App.scss'
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar />
        <div className="page-div">
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={SignIn} />
        </div>
      </Fragment>
    )
  }
}

export default App
