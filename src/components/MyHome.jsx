import React, { useState, useEffect } from 'react';

function MyHome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/MyHome")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
  }, []);

  return (
    <div className="info-container" >
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <a href={item.links}>Learn More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyHome;
