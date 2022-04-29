import "../../css/loginForm.scss";
import React from "react";

// Form to create a quiz
/* Will need a title and description */
const QuizForm = ({
  onSubmitQuiz,
  title,
  setTitle,
  description,
  setDescription,
  formTitle,
}) => {
  return (
    <div className="form-box">
      <h3 className="form-box__heading">{formTitle}</h3>
      <form className="form-box__form" onSubmit={onSubmitQuiz}>
        <input
          className="form-box__input"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="title"
          required
        />
        <input
          className="form-box__input"
          placeholder="Describe your Quiz"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
