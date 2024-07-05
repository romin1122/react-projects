import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        let newList = people.filter((person) => person.id != id);
        setPeople(newList);
    }

    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthdays today</h3>
                <List people={people} removePerson={removePerson}/>
                <button onClick={()=>{setPeople(data)}}>Reset App</button>
            </section>
        </main>);
}

export default App;
