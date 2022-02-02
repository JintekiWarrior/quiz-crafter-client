import React, { useState, useEffect } from 'react'
import { indexQuiz } from './../../api/quiz'

// Index Quizzes component
const IndexQuiz = () => {
    const [quizzes, setQuizzes] = useState([])

    // Api request to show the quiz
    useEffect(() => {
        const show = async () => {
            try {
                const res = await indexQuiz()
                setQuizzes(res.data.quiz)
            } catch (error) {
                console.log(error)
            }
        }
        show()
    }, []) 

    return (
        <div>
            {quizzes.map(quiz => (
                <div key={quiz._id}>
                    <h4>{quiz.title}</h4>
                    <p>{quiz.description}</p>
                </div>
            ))}
        </div>
    )
}

export default IndexQuiz