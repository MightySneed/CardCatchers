import { useState } from 'react';
import axios from 'axios';
import Game from './game';
 
const SearchBarPOK = () => {
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
            setSuggestions(data.data);
        } else {
          data = [];
        }} catch (error) {
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
        <div>
<h1 className="text-style">Peekaboo</h1>
        </div>
    );
};
 
export default SearchBarPOK;
