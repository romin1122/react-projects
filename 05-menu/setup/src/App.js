import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let categories = ['All'];
items.forEach( item => categories.includes(item.category) ? null : categories.push(item.category) );


function App() {
    const [currentCategory, setCurrentCategory] = useState('All');

    return <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Our Menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={categories} setCurrentCategory={setCurrentCategory}/>
                <Menu items={items} category={currentCategory}/>
            </section>
        </main>;
}

export default App;
