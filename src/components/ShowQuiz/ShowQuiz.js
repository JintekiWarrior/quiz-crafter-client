import React, { useState, useEffect } from "react";
import { showQuiz, deleteQuiz } from "./../../api/quiz";
import { useParams, Link } from "react-router-dom";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import ShowQuestions from "../ShowQuestions/ShowQuestions";

const ShowQuiz = ({ user }) => {
  const [quiz, setQuiz] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showQuestions, setShowQuestions] = useState([]);
  const [isListUpdated, setIsListUpdated] = useState(0);

  let { id } = useParams();

  // Api request to show a quiz
  useEffect(() => {
    const show = async () => {
      try {
        const res = await showQuiz(user, id);
        setQuiz(res.data.quiz);
        setShowQuestions(res.data.quiz.questions);
      } catch (error) {
        console.log(error);
      }
    };
    show();
  }, [isListUpdated]);

  // Api request to delete a quiz
  const onDeleteQuiz = (event) => {
    event.preventDefault();
    const destroy = async () => {
      try {
        const res = await deleteQuiz(user, id);
        console.log(res + "data deleted");
      } catch (error) {
        console.log(error);
      }
    };
    destroy();
  };

  // allows the user to add multiple question forms
  const onAddQuestion = (event) => {
    !showQuestionForm ? setShowQuestionForm(true) : setShowQuestionForm(false);
  };

  return (
    <div className="quiz">
      <div className="quiz__container">
        <h3 className="quiz__heading">{quiz.title}</h3>
        <p className="quiz__description">{quiz.description}</p>
        <div className="quiz__button-box">
          <Link className="quiz__btn" to={`/update-quiz/${id}`}>
            Update
          </Link>
          <a className="quiz__btn" onClick={onAddQuestion}>
            Add Question
          </a>
          <a className="quiz__btn" onClick={onDeleteQuiz}>
            Delete
          </a>
        </div>
      </div>
      {showQuestionForm ? (
        <CreateQuestion
          user={user}
          quizId={id}
          setIsListUpdated={setIsListUpdated}
          isListUpdated={isListUpdated}
        />
      ) : null}
      <ShowQuestions showQuestions={showQuestions} quizId={id} user={user} />
    </div>
  );
};

export default ShowQuiz;
