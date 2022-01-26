import React from 'react'

// Form to create a quiz
/* Will need a title and description */
const QuizForm = ({
    onSubmitQuiz,
    title,
    setTitle,
    description,
    setDescription
    }) => {

    return (
        <div>
            <form onSubmit={onSubmitQuiz}>
                <input
                    placeholder="Quiz Title" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    label="title" 
                    required 
                />
                <input
                    placeholder="Describe your Quiz"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    label="description" 
                    required 
                />
                <button
                    type="submit" 
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default QuizForm