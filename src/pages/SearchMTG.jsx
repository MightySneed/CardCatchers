import { useState } from 'react';
import axios from 'axios';

const SearchBarMTG = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedGame, setSelectedGame] = useState('YGO');

    const fetchData = async (searchValue) => {
        try {
            let data;
            if (selectedGame === 'MTG') {
                const response = await axios.get(
                  `https://api.scryfall.com/cards/named?fuzzy=${searchValue}`
                );
                data = response.data;
                setSuggestions(data);
            } else {
                data = [];
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(value);
        }
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div className="search-container">
            <div className="search-left">
                <input className="search-bar-style"
                    type="text"
                    placeholder="I'm looking for"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <div>
                    <p >`You are looking for ${value}`</p>
                    <button className="add-to-button">Add to Collection</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBarMTG;
