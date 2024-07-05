import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
    return (
        <div>
            <div className='title'>
                <h2>Our Tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                { tours.map(tour => <Tour tour={tour} key={tour.id} remove={() => removeTour(tour.id)}/>) }
            </div>
        </div>);
};

export default Tours;
