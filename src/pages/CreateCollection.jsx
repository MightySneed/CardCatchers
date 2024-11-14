import React, { useState } from 'react';
import Game from './Game';

const Collection = ({ username }) => {
  const [colName, setColName] = useState('');
  const [colGame, setColGame] = useState('');

  const handleCreateCollection = async (event) => {
    event.preventDefault();

    const response = await fetch('https://cardcatchersbackend-production.up.railway.app/addCol', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        colName: colName,
        colGame: Game,
        username: username,
      }),
    });

    if (response.ok) {
      console.log('Collection created successfully');

    } else {
      console.log('Error creating collection');

    }
  };

  return (
    <div>
      <h2>Create a New Collection</h2>
      <form onSubmit={handleCreateCollection}>
        <input
          type="text"
          placeholder="Collection Name"
          value={colName}
          onChange={(e) => setColName(e.target.value)}
        />
        <button type="submit">Create Collection</button>
      </form>
    </div>
  );
};

export default Collection;
