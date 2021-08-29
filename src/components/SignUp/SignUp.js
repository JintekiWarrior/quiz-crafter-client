import React, { useState } from 'react'
import { signUp } from './../../api/auth'
import { withRouter } from 'react-router-dom'

// Material ui components
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  input: {
    marginBottom: '2rem'
  },

  paper: {
    padding: '2rem',
  }
})

const SignUp = ({ setUser, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const classes = useStyles()

  const onSignUp = event => {
    event.preventDefault()
    // signUp(email, password, passwordConfirm)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
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
    <Paper className={classes.paper}>
      <Typography
        variant='h4'
        align='center'
      >
        Sign Up
      </Typography>
      <form noValidate onSubmit={onSignUp}>
        <TextField
          className={classes.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          color="primary"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="Password"
          type="password"
          color="primary"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          label="Password Confirm"
          type="password"
          color="primary"
          fullWidth
          required
        />
        <Button
          variant='contained'
          color="primary"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default withRouter(SignUp)
