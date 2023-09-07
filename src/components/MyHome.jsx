import React, { useState, useEffect } from 'react';

function MyHome() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    name: '',
    image: '',
    description: '',
    links: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/MyHome')
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = () => {
    fetch('http://localhost:3000/MyHome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(() => {
        setNewData({
          name: '',
          image: '',
          description: '',
          links: '',
        });
        fetchData();
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/MyHome/${id}`, {
      method: 'DELETE',
    }).then(() => {
      fetchData();
    });
  };

  return (
    <div className="info-container">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className="item-box">
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <a href={item.links}>Learn More</a>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-data-form" style={{ textAlign: 'center' }}>
        <h2 className="addNewData" style={{ color: 'red' }}>
          Add New Data
        </h2>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={newData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Image"
              name="image"
              value={newData.image}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              name="description"
              placeholder="Description"
              value={newData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Links"
              name="links"
              value={newData.links}
              onChange={handleInputChange}
            />
          </div>
          <button className="submitter" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyHome;
