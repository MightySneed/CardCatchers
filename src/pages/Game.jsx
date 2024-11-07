
import React from 'react';

function Game({ selectedGame, setGameSelect }) {
    return (
        <>
            <label htmlFor="game">Choose the game:</label>
            <select 
                name="game" 
                id="game"
                value={selectedGame}
                onChange={(event) => {setGameSelect(event.target.value); console.log(event.target.value)}}
                style={{ marginBottom: '10px' }}
            >
                <option value="POK">Pokémon TCG</option>
                <option value="YGO">Yu-Gi-Oh! TCG</option>
                <option value="MTG">Magic The Gathering</option>
            </select>
        </>
    );
}

export default Game;
