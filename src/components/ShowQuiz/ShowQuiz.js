import React, { useState, useEffect } from 'react'
import { showQuiz, deleteQuiz } from './../../api/quiz'
import { useParams, Link } from 'react-router-dom'
import CreateQuestion from '../CreateQuestion/CreateQuestion'

const ShowQuiz = ({ user }) => {
    const [quiz, setQuiz] = useState([])
    const [question, setQuestion] = useState([])

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

    const onAddQuestion = event => {
        setQuestion(question => [...question, <CreateQuestion />])
    }

    return (
        <div>
            <div className='quiz__container'>
                <h3 className='quiz__heading'>{quiz.title}</h3>
                <p className='quiz__description'>{quiz.description}</p>
                <div className='quiz__button-container'>
                    <Link className='quiz__link' to={`/update-quiz/${id}`}>Update</Link>
                    <button className='quiz__button' onClick={onDeleteQuiz}>Delete</button>
                </div>
            </div>
            <div>
                <button onClick={onAddQuestion}>Add Question</button>
                {question.map((item, i) => (
                    <div key={i}>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default ShowQuiz
