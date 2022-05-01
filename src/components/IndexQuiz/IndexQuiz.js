import "./../../css/quiz.scss";
import React, { useState, useEffect } from "react";
import { indexQuiz } from "./../../api/quiz";
import { Link } from "react-router-dom";

// Index Quizzes component
const IndexQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  // Api request to show the quizzes
  useEffect(() => {
    const showQuizzes = async () => {
      try {
        const res = await indexQuiz();
        setQuizzes(res.data.quiz);
      } catch (error) {
        console.log(error);
      }
    };
    showQuizzes();
  }, []);

  return (
    <div className="quiz">
      {quizzes.map((quiz) => (
        <div className="quiz__container" key={quiz._id}>
          <h4 className="quiz__heading">{quiz.title}</h4>
          <p className="quiz__description">{quiz.description}</p>
          <div className="quiz__button-box">
            <Link className="quiz__btn" to={`/show-quizzes/${quiz._id}`}>
              Go To
            </Link>
            <Link className="quiz__btn" to={`/take-quiz/${quiz._id}`}>
              Take Quiz
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndexQuiz;
