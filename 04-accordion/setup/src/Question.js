import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({data}) => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand( prevState => !prevState );

    return <div className='question'>
            <header>
                <h4>{data.title}</h4>
                <button className='btn' onClick={toggleExpand}> {expand ? <AiOutlineMinus /> : <AiOutlinePlus />} </button>
            </header>
            { expand ? <p>{data.info}</p> : <> </> }
        </div>
};

export default Question;
