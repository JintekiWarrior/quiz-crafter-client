import './QuizForm.scss'
import React from 'react'

// Form to create a quiz
/* Will need a title and description */
const QuizForm = ({
    onSubmitQuiz,
    title,
    setTitle,
    description,
    setDescription,
    formTitle
    }) => {

    return (
        <div className='form'>
            <h3 className="form__title">{formTitle}</h3>
            <form className='form__input-container' onSubmit={onSubmitQuiz}>
                <input
                    className='form__input'
                    placeholder="Quiz Title" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    label="title" 
                    required 
                />
                <input
                    className='form__input'
                    placeholder="Describe your Quiz"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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