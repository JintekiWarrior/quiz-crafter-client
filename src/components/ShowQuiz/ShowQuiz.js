import React, { useState, useEffect } from 'react'
import { showQuiz } from './../../api/quiz'
import { useParams } from 'react-router-dom'

const ShowQuiz = ({ user }) => {
    const [quiz, setQuiz] = useState([])

    let { id } = useParams()

    // Api request to show a quiz
    useEffect(() => {
        const show = async () => {
            try {
                const res = await showQuiz(user, id)
                setQuiz(res.data.quiz)
            } catch (error) {
                console.log(error)
            }
        }
        show()
    }, [])

    return (
        <div>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
        </div>
    )
}

export default ShowQuiz
