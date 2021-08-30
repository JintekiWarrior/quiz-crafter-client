import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (email, password, passwordConfirm) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      }
    }
  })
}

export const signIn = (email, password) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-in',
    data: {
      credentials: {
        email: email,
        password: password
      }
    }
  })
}

export const changePassword = (user, oldPass, newPass) => {
  console.log(user)
  return axios({
    method: 'PATCH',
    url: apiUrl + '/change-password',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      passwords: {
        old: oldPass,
        new: newPass
      }
    }
  })
}

export const signOut = user => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/sign-out',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
