import React, { useState, useEffect } from 'react';

function FavSports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FavoriteSports")
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavSports;
