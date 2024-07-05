import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://www.course-api.com/react-tours-project'

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = ( id ) => {
        setTours(prevTours => prevTours.filter(item => item.id != id));
    }

    useEffect(() => {
        fetch(url)
            .then((response)=>response.json())
            .then((data) => {
                setTours(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
        console.log(url);
    }, [])

    if (loading) return <Loading />;

    else return <Tours tours={tours} removeTour={removeTour}/>;
}

export default App
