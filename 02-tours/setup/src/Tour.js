import React, { useState } from 'react';

const Tour = ({ tour, remove }) => {
    const [readMore, setReadMore] = useState(true);

    return (<div className='single-tour'>
        <img src={tour.image} alt={tour.name}/>

        <div className='details'>
            <div className='tour-info'>
                <h4>{tour.name}</h4>
                <h4 className='tour-price'>${tour.price}</h4>
            </div>

        <p>{readMore ? tour.info.substring(0, 200) + '...' : tour.info} <button onClick={() => {
            setReadMore(prevState => !prevState)
        }}>{readMore ? 'Read more' : 'Read less'}</button></p>

            <button className='delete-btn' onClick={remove}>Not Interested</button>
        </div>

    </div>);
};

export default Tour;
