import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

    return <main>
            <section className='container'>
                <h3>Questions</h3>
                <div>
                    {data.map(question => <SingleQuestion key={question.id} data={question} />)}
                </div>
            </section>
        </main>
}

export default App;
