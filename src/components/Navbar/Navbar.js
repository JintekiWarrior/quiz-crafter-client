import './Navbar.scss'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {

  const signedIn = (
    <Fragment>
      <Link
        className="navbar__link navbar__l1"
        to='/change-password'
      >
        Change Password
      </Link>
      <Link
        className="navbar__link navbar__l2"
        to='/sign-out'
      >
        Sign Out
      </Link>
      <Link
        className="navbar__link navbar__l3"
        to='/home'
      >
        Home
      </Link>
      <Link
        className='navbar__link navbar__l4'
        to='/create-quiz'
      >
        Create a Quiz
      </Link>
      <Link
        className='navbar__link navbar__l5'
        to='/show-quizzes'
      >
        Show Quizzes
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
      <div className="navbar__link-container">
        {user ? signedIn : notSignedIn}
      </div>
    </div>
  )
}

export default Navbar
