import "./TakeQuiz.scss";
import React, { useState, useEffect } from "react";
import { showQuiz } from "./../../api/quiz";
import { useParams } from "react-router-dom";
import ShowScore from "../ShowScore/ShowScore";

// Component that allows the user to take a quiz
const TakeQuiz = ({ user }) => {
  const [quiz, setQuiz] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState("");
  const [showScore, setShowScore] = useState(false);

  let { id } = useParams();
  // make api call to quiz
  // jsx should have the question in text and answer in radio buttons
  useEffect(() => {
    const show = async () => {
      try {
        const res = await showQuiz(user, id);
        setQuiz(res.data.quiz);
        setQuestions(res.data.quiz.questions);
      } catch (error) {
        console.log(error);
      }
    };
    show();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitQuiz = (event) => {
    event.preventDefault();
    console.log("answers", answers);
    const answerLength = Object.keys(answers).length;
    let rightAnswerCount = 0;
    Object.entries(answers).forEach(([key, value]) => {
      if (value === "rightAnswer") rightAnswerCount++;
    });
    setScore(Math.trunc((rightAnswerCount / answerLength) * 100).toString());
    setShowScore(true);
  };

  const getQuiz = () => {
    return (
      <form id="take-quiz__form" onSubmit={onSubmitQuiz}>
        {questions.map((item) => (
          <div className="take-quiz__container" key={item._id}>
            <h4 className="take-quiz__heading">{item.question}</h4>
            <div className="take-quiz__radio-container">
              <input
                type="radio"
                id="rightAnswer"
                name={item._id}
                value="rightAnswer"
                onChange={handleChange}
              />
              <label htmlFor="rightAnswer">{item.rightAnswer}</label>
            </div>
            <div className="take-quiz__radio-container">
              <input
                type="radio"
                id="wrongAnswerOne"
                name={item._id}
                value="wrongAnswerOne"
                onChange={handleChange}
              />
              <label htmlFor="wrongAnswerOne">{item.wrongAnswerOne}</label>
            </div>
            <div className="take-quiz__radio-container">
              <input
                type="radio"
                id="wrongAnswerTwo"
                name={item._id}
                value="wrongAnswerTwo"
                onChange={handleChange}
              />
              <label htmlFor="wrongAnswerTwo">{item.wrongAnswerTwo}</label>
            </div>
          </div>
        ))}
        <button className="take-quiz__btn" type="submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className="take-quiz">
      <div className="take-quiz__container">
        <h3 className="take-quiz__heading">{quiz.title}</h3>
        <p className="take-quiz__description">{quiz.description}</p>
      </div>
      {showScore ? <ShowScore score={score} /> : getQuiz()}
    </div>
  );
};

export default TakeQuiz;
