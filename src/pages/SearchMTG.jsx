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
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ width: '50%' }}>
                <input
                    type="text"
                    placeholder="I'm looking for"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
                <div>
                    <p>`You are looking for ${value}`</p>
                    <button>Add to Collection</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBarMTG;
