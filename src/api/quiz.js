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

// Quiz Show Request
export const showQuiz = (user, quizId) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/quiz/' + quizId,
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
}

// Quiz Update Request
export const updateQuiz = (user, quizId, title, description) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/quiz/' + quizId,
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