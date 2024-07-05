import React from 'react';

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
          const {name, age, id, image} = person;

          return (
              <article key={id} className='person'>
                  <img src={image} alt={name}/>
                  <div>
                      <h4>{name}</h4>
                      <p>{age} years</p>
                  </div>
                  <button onClick={() => {removePerson(id)}}>Remove</button>
              </article>
          );
      })}
    </>
  );
};

export default List;
