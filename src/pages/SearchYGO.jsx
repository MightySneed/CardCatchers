import { useState } from 'react';
import axios from 'axios';
import Game from './game';
 
const SearchBarYGO = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedGame, setSelectedGame] = useState('YGO');
 
    const fetchData = async (searchValue) => {
        try {
            let data;
             {
                const response = await axios.get(
                  `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchValue}`
                 
                );
            data = response.data;
            setSuggestions(data.data);
        }} catch (error) {
            console.log(error);
        }
    };
 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(value);
            console.log(value);
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
            <div className="search-results">
              {suggestions.map((item, index) => (
                <p key={index} onClick={() => handleCardClick(item)} className="search-result-item" style={{ cursor: 'pointer' }}>
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="search-right">
            {selectedCard && (
              <div className="card-info-container">
                <h2>{selectedCard.name}</h2>
                <img  className="card-styling" src={selectedCard.card_images[0].image_url} alt={selectedCard.name} />
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
 
export default SearchBarYGO;
 