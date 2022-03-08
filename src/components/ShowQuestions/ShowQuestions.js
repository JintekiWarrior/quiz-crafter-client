import React from "react"

const ShowQuestions = ({ showQuestions }) => {
    return (
        <div>
            {showQuestions.map(item => (
                <div className="quiz__container" key={item._id}>
                    <h4 className="quiz__heading">{item.question}</h4>
                    <ul>
                        <li className="quiz__list-item">{item.rightAnswer}</li>
                        <li className="quiz__list-item">{item.wrongAnswerOne}</li>
                        <li className="quiz__list-item">{item.wrongAnswerTwo}</li>
                    </ul>
                    <button className="quiz__button">Update</button>
                </div>
            ))}
        </div>
    )
}

export default ShowQuestions