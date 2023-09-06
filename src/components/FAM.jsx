import React, { useState, useEffect } from 'react';

function FAM() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FAM")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
  }, []);

  return (
    <div>
      <div className="info-container" >
        {data.map((item) => (
          <div className="info-box" key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAM;
