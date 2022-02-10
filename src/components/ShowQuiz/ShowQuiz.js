import React, { useState, useEffect } from 'react'
import { showQuiz, deleteQuiz } from './../../api/quiz'
import { useParams, Link } from 'react-router-dom'

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

    // Api request to delete a quiz
    const onDeleteQuiz = event => {
        event.preventDefault()
        const destroy = async () => {
            try {
                const res = await deleteQuiz(user, id)
                console.log(res + "data deleted")
            } catch (error) {
                console.log(error)
            }
        }
        destroy()
    }

    return (
        <div>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <Link to={`/update-quiz/${id}`}>Update</Link>
            <button onClick={onDeleteQuiz}>Delete</button>
        </div>
    )
}

export default ShowQuiz
