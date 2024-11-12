import { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const location = useLocation();

    // Log the location to ensure the state is being passed correctly
    console.log('Location State:', location.state);
    
    // Get selectedGame from location.state or default to 'YGO'
    const selectedGameFromState = location.state?.selectedGame || 'YGO';

    const [selectedGame, setSelectedGame] = useState(selectedGameFromState);
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        // Sync selectedGame with the location state when it changes
        if (location.state?.selectedGame) {
            setSelectedGame(location.state.selectedGame);
        }
    }, [location.state]);

    const fetchData = async (searchValue) => {
        try {
            let data;
            if (selectedGame === 'YGO') {
                const response = await axios.get(
                  `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchValue}`
                );
                data = response.data;
            } else if (selectedGame === 'MTG') {
                const response = await axios.get(
                    `https://api.scryfall.com/cards/named?fuzzy=${searchValue}`
                  );
                  data = response.data;
            } else if (selectedGame === 'POK') {
                const response = await axios.get(
                    `https://api.pokemontcg.io/v2/cards/qname:${searchValue}`
                  );
                  data = response.data;
            } else {
                data = [];
            }
            setSuggestions(data.data);
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
            {/* Dropdown for game selection */}
            <select 
                value={selectedGame} 
                onChange={(e) => setSelectedGame(e.target.value)} 
                className="game-dropdown"
            >
                <option value="YGO">Yu-Gi-Oh</option>
                <option value="MTG">Magic the Gathering</option>
                <option value="POK">Pokemon</option>
            </select>

            {/* Search Bar */}
            <input 
                className="search-bar-style"
                type="text"
                placeholder="I'm looking for"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            {/* Search Results */}
            <div className="search-results">
              {suggestions.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => handleCardClick(item)} 
                  className="search-result-item"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card Info Display */}
          <div className="search-right">
            {selectedCard && (
              <div className="card-info-container">
                <h2>{selectedCard.name}</h2>
                <img className="card-styling" src={selectedCard.card_images[0].image_url} alt={selectedCard.name} />
                {selectedGame === 'YGO' && (
                  <>
                    <p><strong>Type:</strong> {selectedCard.type}</p>
                    <p><strong>Description:</strong> {selectedCard.desc}</p>
                    <p><strong>Attack:</strong> {selectedCard.atk != null ? selectedCard.atk : 'N/A'}</p>
                    <p><strong>Defense:</strong> {selectedCard.def != null ? selectedCard.def : 'N/A'}</p>
                    <p><strong>Level:</strong> {selectedCard.level != null && selectedCard.level !== 0 ? selectedCard.level : 'N/A'}</p>
                    <p><strong>Attribute:</strong> {selectedCard.attribute != null ? selectedCard.attribute : 'N/A'}</p>
                  </>
                )}
                <button className="add-to-button">Add to Collection</button>
              </div>
            )}
          </div>
      </div>
    );
};

export default SearchBar;
