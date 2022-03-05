/*** create quiz api request routes ***/ 
import apiUrl from "../apiConfig"
import axios from "axios"

// Question Post Request
export const createQuestion = (
    user, 
    question, 
    rightAnswer, 
    wrongAnswerOne, 
    wrongAnswerTwo,
    quizId
    ) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/questions',
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
        data: {
            question: {
                question: question,
                rightAnswer: rightAnswer,
                wrongAnswerOne: wrongAnswerOne,
                wrongAnswerTwo: wrongAnswerTwo,
                quizId: quizId
            }
        }
    })
}