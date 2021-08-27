import React, { useState } from 'react'
import { signIn } from './../../api/auth'

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

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  const onSignIn = event => {
    event.preventDefault()
    signIn(email, password)
      .then(res => console.log(res.data))
      .then(err => console.log(err))
  }

  return (
    <Paper className={classes.paper}>
      <Typography
        variant='h4'
        align='center'
      >
        Sign In
      </Typography>
      <form noValidate onSubmit={onSignIn}>
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

export default SignIn
