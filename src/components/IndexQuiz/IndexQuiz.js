import React, { useState, useEffect } from 'react'
import { indexQuiz } from './../../api/quiz'
import { Link } from 'react-router-dom'

// Index Quizzes component
const IndexQuiz = () => {
    const [quizzes, setQuizzes] = useState([])

    // Api request to show the quizzes
    useEffect(() => {
        const showQuizzes = async () => {
            try {
                const res = await indexQuiz()
                setQuizzes(res.data.quiz)
            } catch (error) {
                console.log(error)
            }
        }
        showQuizzes()
    }, []) 

    return (
        <div>
            {quizzes.map(quiz => (
                <div key={quiz._id}>
                    <h4>{quiz.title}</h4>
                    <p>{quiz.description}</p>
                    <Link
                        to={`/show-quizzes/${quiz._id}`}
                    >
                        Go To ➡
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default IndexQuiz