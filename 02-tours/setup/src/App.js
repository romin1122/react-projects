import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((item) => item.id != id));
  };

  const fetchTours = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    console.log(url);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;
  else if (tours.length == 0) {
    return (
      <main className="title">
        <h2>No Tours Left!</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  } else
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />;
      </main>
    );
}

export default App;
