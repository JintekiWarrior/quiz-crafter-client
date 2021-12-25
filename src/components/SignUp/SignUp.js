import './SignUp.scss'
import React, { useState } from 'react'
import { signUp } from './../../api/auth'
import { withRouter } from 'react-router-dom'

const SignUp = ({ setUser, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const onSignUp = event => {
    event.preventDefault()

    const createUser = async () => {
      try {
        const res = await signUp(email, password, passwordConfirm)
        setUser(res.data.user)
        history.push('/')
      } catch (error) {
        console.log('error message: ', error)
      }
    }

    createUser()
  }

  return (
    <div className="sign-up">
      <h2
        className="sign-up__heading"
        variant='h4'
        align='center'
      >
        Sign Up
      </h2>
      <form 
        className="sign-up__form"
        noValidate 
        onSubmit={onSignUp}
      >
        <input
          className="sign-up__input"
          placeholder='EMAIL'
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          color="primary"
          required
        />
        <input
          className="sign-up__input"
          placeholder='PASSWORD'
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="Password"
          type="password"
          color="primary"
          required
        />
        <input
          className="sign-up__input"
          placeholder='PASSWORD CONFIRMATION'
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          label="Password Confirm"
          type="password"
          color="primary"
          required
        />
        <button
          className='sign-up__btn'
          variant='contained'
          color="primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
