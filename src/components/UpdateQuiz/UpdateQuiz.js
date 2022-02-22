import React, {useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { updateQuiz } from '../../api/quiz'
import QuizForm from './../QuizForm/QuizForm'

const UpdateQuiz = ({ user }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let { id } = useParams()

    //Api request to update quiz
    const onUpdateQuiz = event => {
        event.preventDefault()
        const update = async () => {
            try {
                const res = await updateQuiz(
                    user,
                    id,
                    title,
                    description
                )
                console.log('creation successful', res.data)
            } catch (error) {
                console.log(error)
            }
        }

        update()
    }

    return (
        <div>
            <QuizForm
                onSubmitQuiz={onUpdateQuiz} 
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                formTitle={"Update Quiz"}
            />
        </div>
    )
}

export default UpdateQuiz