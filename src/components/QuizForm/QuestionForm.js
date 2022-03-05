import './QuizForm.scss'
import React from 'react'

// Form to create a question
/* Will need a question, 1 rightAnswer, and 2 wrongAnswers */
const QuizForm = ({
    formTitle,
    onSubmitQuestion,
    question,
    setQuestion,
    rightAnswer,
    setRightAnswer,
    wrongAnswerOne,
    setWrongAnswerOne,
    wrongAnswerTwo,
    setWrongAnswerTwo
    }) => {

    return (
        <div className='form'>
            <h3 className="form__title">{formTitle}</h3>
            <form className='form__input-container' onSubmit={onSubmitQuestion}>
                <input
                    className='form__input'
                    placeholder="What is the question?" 
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    label="title" 
                    required 
                />
                <input
                    className='form__input'
                    placeholder="Answer One"
                    value={rightAnswer}
                    onChange={e => setRightAnswer(e.target.value)}
                    label="description" 
                    required 
                />
                <input
                    className='form__input'
                    placeholder="Answer Two"
                    value={wrongAnswerOne}
                    onChange={e => setWrongAnswerOne(e.target.value)}
                    label="description" 
                    required 
                />
                <input
                    className='form__input'
                    placeholder="Answer Three"
                    value={wrongAnswerTwo}
                    onChange={e => setWrongAnswerTwo(e.target.value)}
                    label="description" 
                    required 
                />
                <button
                    className='form__button'
                    type="submit" 
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default QuizForm