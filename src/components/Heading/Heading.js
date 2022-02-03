import './Heading.scss'
import React from 'react'
import bookPic from './../../images/books.jpg'

const Heading = () => {
    return (
        <div className='heading'>
            <img className="heading__image" src={bookPic} alt="books"></img>
            <div className='heading__content'>
                <h1 className='heading__title'>Quiz Crafter</h1>
                <p className='heading__quote-top'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className='heading__quote-bottom'>
                    Obcaecati eveniet, amet quos beatae deserunt voluptatum hic distinctio eos
                </p>
            </div>
        </div>
    )
}

export default Heading