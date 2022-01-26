import React, { useState } from 'react'

import { createQuiz } from './../../api/quiz'
import QuizForm from './../QuizForm/QuizForm'

// Component that allows the user to create a quiz.
const CreateQuiz = ({ user }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // Api request to create a quiz
    const onCreateQuiz = event => {
        event.preventDefault()
        const create = async () => {
            try {
                const res = await createQuiz(
                    user,
                    title,
                    description
                )
                console.log('creation successful', res.data)
            } catch (error) {
                console.log(error)
            }
        }

        create()
    }

    return (
        <div>
            <QuizForm
                onSubmitQuiz={onCreateQuiz} 
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
            />
        </div>
    )
}

export default CreateQuiz