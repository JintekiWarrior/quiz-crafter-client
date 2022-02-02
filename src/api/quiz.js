/*** create quiz api request routes ***/ 
import apiUrl from "../apiConfig"
import axios from "axios"

// Quiz Post Request
export const createQuiz = (user, title, description) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/quiz',
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
        data: {
            quiz: {
                title: title,
                description: description
            }
        }
    })
}

// Quiz Index Request
export const indexQuiz = () => {
    return axios({
        method: 'GET',
        url: apiUrl + '/quiz'
    })
}

