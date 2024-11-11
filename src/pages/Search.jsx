// Search.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access router state
import Game from './game';
import SearchBarYGO from './SearchYGO';
import SearchBarMTG from './SearchMTG';
import SearchBarPOK from './SearchPOK';

const Search = () => {
    const location = useLocation(); // Get location state
    const initialGame = location.state?.selectedGame || 'Nothing'; // Default to 'Nothing' if no state is passed
    const [GameSelect, setGameSelect] = useState(initialGame); // Set initial state based on router state

    // Optionally, if you want to update the dropdown after user interaction, you could use this effect:
    useEffect(() => {
        if (initialGame !== 'Nothing') {
            setGameSelect(initialGame); // Update GameSelect when location state changes
        }
    }, [initialGame]);

    return (
        <div>
            <br />
            <br />
            <Game setGameSelect={setGameSelect} />
            {GameSelect === 'YGO' && <div><h3>Yu-Gi-Oh!</h3><SearchBarYGO /></div>}
            {GameSelect === 'MTG' && <div><h3>Magic The Gathering</h3><SearchBarMTG /></div>}
            {GameSelect === 'POK' && <div><h3>Pokemon</h3><SearchBarPOK /></div>}
            {GameSelect === 'Nothing' && <div><p>"Select a game to search for cards."</p></div>}
        </div>
    );
}

export default Search;
