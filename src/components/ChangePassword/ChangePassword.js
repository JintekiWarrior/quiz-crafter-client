import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from './../../api/auth'

// material ui components
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  input: {
    marginBottom: '2rem'
  },

  paper: {
    padding: '2rem',
  }
})

const ChangePassword = ({ user, history }) => {
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')

  const classes = useStyles()

  const onChangePassword = event => {
    event.preventDefault()
    const updatePassword = async () => {
      try {
        const res = await changePassword(user, oldPass, newPass)
        console.log('changepassword response:', res)
        history.push('/')
      } catch (error) {
        console.log(error)
      }
    }

    updatePassword()
  }

  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h4"
        align="center"
      >
        Change Password
      </Typography>
      <form onSubmit={onChangePassword}>
        <TextField
          className={classes.input}
          value={oldPass}
          onChange={e => setOldPass(e.target.value)}
          label="old password"
          color="primary"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          value={newPass}
          onChange={e => setNewPass(e.target.value)}
          label="new password"
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

export default withRouter(ChangePassword)
