import React, { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData));
  }, [url]);

  const postItem = (newItem) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((response) => {
        setData([...data, response]);
      });
  };

  const deleteItem = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    });
  };

  const toggleStar = (id) => {
    const goalToUpdate = data.find((item) => item.id === id);
    if (goalToUpdate) {
      const updatedStarred = !goalToUpdate.starred;
      const updatedGoal = { ...goalToUpdate, starred: updatedStarred };

      fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedGoal),
      }).then(() => {
        const updatedData = data.map((item) =>
          item.id === id ? updatedGoal : item
        );
        setData(updatedData);
      });
    }
  };

  return { data, postItem, deleteItem, toggleStar };
}

function Goals() {
  const [newGoal, setNewGoal] = useState({
    name: '',
    description: '',
    image: '',
    starred: false,
  });

  const { data, postItem, deleteItem, toggleStar } = useApi(
    'http://localhost:3000/Goals'
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewGoal({
      ...newGoal,
      [name]: value,
    });
  };

  const addGoal = (event) => {
    event.preventDefault();
    console.log('New Goal Data:', newGoal);

    postItem(newGoal);

    setNewGoal({
      name: '',
      description: '',
      image: '',
      starred: false,
    });
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h2 id="goalsName" class="outlined-heading" style={{ color: 'red' }}>
          Goals
        </h2>
      </div>
      <div className="info-container">
        {data.map((item) => (
          <div className="info-box" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={() => toggleStar(item.id)}>
              {item.starred ? '⭐️' : '☆'}
            </button>
            <button onClick={() => deleteItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="add-goal-form">
        <h2 id="addNewFormRed" style={{ color: 'red' }}>Add a New Goal</h2>
        <form onSubmit={addGoal}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newGoal.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={newGoal.description}
            onChange={handleInputChange}
          />
          <button type="submit">Add Goal</button>
        </form>
      </div>
    </div>
  );
}

export default Goals;
