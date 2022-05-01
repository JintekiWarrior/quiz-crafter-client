import "../../css/loginForm.scss";
import React from "react";

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
  setWrongAnswerTwo,
}) => {
  return (
    <div className="form-box">
      <h3 className="form-box__heading">{formTitle}</h3>
      <form className="form-box__form" onSubmit={onSubmitQuestion}>
        <input
          className="form-box__input"
          placeholder="What is the question?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          label="title"
          required
        />
        <input
          className="form-box__input"
          placeholder="Right Answer"
          value={rightAnswer}
          onChange={(e) => setRightAnswer(e.target.value)}
          label="description"
          required
        />
        <input
          className="form-box__input"
          placeholder="Wrong Answer"
          value={wrongAnswerOne}
          onChange={(e) => setWrongAnswerOne(e.target.value)}
          label="description"
          required
        />
        <input
          className="form-box__input"
          placeholder="Wrong Answer"
          value={wrongAnswerTwo}
          onChange={(e) => setWrongAnswerTwo(e.target.value)}
          label="description"
          required
        />
        <button className="form-box__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
