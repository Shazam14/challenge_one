import React, { useState, useEffect } from 'react';

function Item() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/items/')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Item;
