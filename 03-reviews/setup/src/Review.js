import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {id, name, job, image, text} = people[index];

    const prevIndex = () => {
        let newIndex = index - 1;
        if (newIndex < 0) newIndex = people.length - 1;
        setIndex(newIndex);
    }
    const nextIndex = () => {
        let newIndex = index + 1;
        if (newIndex > people.length - 1) newIndex = 0;
        setIndex(newIndex);
    }
    const randomIndex = () => {
        let newIndex = Math.round( Math.random() * (people.length-1) );
        if (newIndex === index) prevIndex();
        setIndex(newIndex);
    }


    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
                <button className='prev-btn' onClick={prevIndex}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextIndex}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomIndex}>
                Random
            </button>
        </article>
    );
};

export default Review;
