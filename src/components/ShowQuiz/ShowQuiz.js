import React, { useState, useEffect } from 'react'
import { showQuiz, deleteQuiz } from './../../api/quiz'
import { useParams, Link } from 'react-router-dom'
import CreateQuestion from '../CreateQuestion/CreateQuestion'
import ShowQuestions from '../ShowQuestions/ShowQuestions'

const ShowQuiz = ({ user }) => {
    const [quiz, setQuiz] = useState([])
    const [showQuestionForm, setShowQuestionForm] = useState(false)
    const [showQuestions, setShowQuestions] = useState([])

    let { id } = useParams()

    // Api request to show a quiz
    useEffect(() => {
        const show = async () => {
            try {
                const res = await showQuiz(user, id)
                setQuiz(res.data.quiz)
                setShowQuestions(res.data.quiz.questions)
                console.log(res.data.quiz.questions)
            } catch (error) {
                console.log(error)
            }
        }
        show()
    }, [showQuestions])

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

    // allows the user to add multiple question forms 
    const onAddQuestion = event => {
        !showQuestionForm ? setShowQuestionForm(true) : setShowQuestionForm(false)
    }

    return (
        <div>
            <div className='quiz__container'>
                <h3 className='quiz__heading'>{quiz.title}</h3>
                <p className='quiz__description'>{quiz.description}</p>
                <div className='quiz__button-container'>
                    <Link className='quiz__link' to={`/update-quiz/${id}`}>Update</Link>
                    <button className='quiz__button' onClick={onDeleteQuiz}>Delete</button>
                    <button className='quiz__button' onClick={onAddQuestion}>Add Question</button>
                </div>
            </div>
            { showQuestionForm ? <CreateQuestion user={user} quizId={id} /> : null }
            <ShowQuestions showQuestions={showQuestions} />
        </div>
    )
}

export default ShowQuiz
