import './Navbar.scss'
import booksPic from '../../images/books.jpg'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {

  const signedIn = (
    <Fragment>
      <Link
        className="navbar__link"
        to='/change-password'
      >
        Change Password
      </Link>
      <Link
        className="navbar__link"
        to='/sign-out'
      >
        Sign Out
      </Link>
      <Link
        className="navbar__link"
        to='/home'
      >
        Home
      </Link>
    </Fragment>
  )

  const notSignedIn = (
    <Fragment>
      <Link
        className="navbar__link"
        to='/sign-up'
      >
        Sign Up
      </Link>
      <Link
        className="navbar__link"
        to='/sign-in'
      >
        Sign In
      </Link>
    </Fragment>
  )

  return (
    <div className="navbar">
      <img className="navbar__image" src={booksPic} alt="picture of books"></img>
      <h1 className="navbar__heading">Quiz Crafter</h1>
      <div className="navbar__link-container">
        {user ? signedIn : notSignedIn}
      </div>
    </div>
  )
}

export default Navbar
