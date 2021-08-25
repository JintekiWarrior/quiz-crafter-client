import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    )
  }
}

export default App
