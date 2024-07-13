import React from 'react';

const Categories = ({ categories, setCurrentCategory }) => {
    return <div className='btn-container'>
            { categories.map(category => <button
                key={categories.indexOf(category)}
                className='filter-btn'
                onClick={() => setCurrentCategory(category)}>
                    { category }
                </button>)
            }
        </div>;
};

export default Categories;
