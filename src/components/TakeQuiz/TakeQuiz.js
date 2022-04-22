import React, { useState, useEffect } from 'react'
import { showQuiz } from './../../api/quiz'
import { useParams } from 'react-router-dom'

const TakeQuiz = ({ user }) => {
  const [quiz, setQuiz] = useState([])
  const [questions, setQuestions] = useState([])

  let { id } = useParams()
  // make api call to quiz
  // jsx should have the question in text and answer in radio buttons
  useEffect(() => {
    const show = async () => {
        try {
            const res = await showQuiz(user, id)
            setQuiz(res.data.quiz)
            setQuestions(res.data.quiz.questions)
        } catch (error) {
            console.log(error)
        }
    }
    show()
  }, [])

  console.log(quiz)
  console.log(questions)

  return (
    <div>
      <div className='quiz__container'>
        <h3 className='quiz__heading'>{quiz.title}</h3>
        <p className='quiz__description'>{quiz.description}</p>
      </div>
      {questions.map(item => (
          <div className='quiz__container' key={item._id}>
            <h4 className='quiz__heading'>{item.question}</h4>
            <form>
              <input type='radio' id='rightAnswer' name='quiz_question' />
              <label for='rightAnswer'>{item.rightAnswer}</label><br/>
              <input type='radio' id='wrongAnswerOne' name='quiz_question' />
              <label for='wrongAnswerOne'>{item.wrongAnswerOne}</label><br/>
              <input type='radio' id='wrongAnswerTwo' name='quiz_question' />
              <label for='wrongAnswerTwo'>{item.wrongAnswerTwo}</label><br/>
            </form>
          </div>
        ))}
    </div>
  )
}

export default TakeQuiz