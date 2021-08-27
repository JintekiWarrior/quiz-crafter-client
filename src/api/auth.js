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
