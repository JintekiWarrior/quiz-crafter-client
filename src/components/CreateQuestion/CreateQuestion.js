import React, { useState } from 'react'

import { createQuestion } from './../../api/question'
import QuestionForm from './../QuizForm/QuestionForm'

// component that allows the user to create a question 
const CreateQuestion = ({ user, quizId, setIsListUpdated, isListUpdated }) => {
    // hooks to store request variables
    const [question, setQuestion] = useState('')
    const [rightAnswer, setRightAnswer] = useState('')
    const [wrongAnswerOne, setWrongAnswerOne] = useState('')
    const [wrongAnswerTwo, setWrongAnswerTwo] = useState('')

    // Api request to create a question
    const onCreateQuestion = event => {
        event.preventDefault()
        const create = async () => {
            try {
                const res = await createQuestion(
                    user,
                    question,
                    rightAnswer,
                    wrongAnswerOne,
                    wrongAnswerTwo,
                    quizId
                )
                setIsListUpdated(isListUpdated += 1)
                console.log("list updated", isListUpdated)
            } catch (error) {
                console.log(error)
            }
        }

        create()
        setQuestion('')
        setRightAnswer('')
        setWrongAnswerOne('')
        setWrongAnswerTwo('')
    }

    return (
        <div>
            <QuestionForm 
                formTitle="Create a Question"
                onSubmitQuestion={onCreateQuestion}
                question={question}
                setQuestion={setQuestion}
                rightAnswer={rightAnswer}
                setRightAnswer={setRightAnswer}
                wrongAnswerOne={wrongAnswerOne}
                setWrongAnswerOne={setWrongAnswerOne}
                wrongAnswerTwo={wrongAnswerTwo}
                setWrongAnswerTwo={setWrongAnswerTwo}
            />
        </div>
    )
}

export default CreateQuestion