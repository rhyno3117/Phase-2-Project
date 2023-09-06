import React, { useState, useEffect } from 'react';

function Goals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Goals")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
  }, []);

  return (
    <div>
      <h2>Goals</h2>
      <div className="info-container">
        {data.map((item) => (
          <div className="info-box" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
