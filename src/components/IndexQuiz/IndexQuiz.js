import './Index.scss'
import './../../css/quiz.scss'
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
        <div className='quiz'>
            {quizzes.map(quiz => (
                <div className='quiz__container' key={quiz._id}>
                    <h4 className='quiz__heading'>{quiz.title}</h4>
                    <p className='quiz__description'>{quiz.description}</p>
                    <Link
                        className='quiz__link'
                        to={`/show-quizzes/${quiz._id}`}
                    >
                        Go To 
                    </Link>
                    <Link
                        className='quiz__link'
                        to='/take-quiz'
                    >Take Quiz</Link>
                </div>
            ))}
        </div>
    )
}

export default IndexQuiz