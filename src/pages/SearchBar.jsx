import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const fetchData = async (searchValue) => {
        try {
            const { data } = await axios.get(
              `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchValue}`
            );
            setSuggestions(data.data); // Assuming data.data contains the card information
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
        <div>
          <input
            type="text"
            placeholder="I'm looking for"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <div>
            {suggestions.map((item, index) => (
              <p key={index} onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                {item.name}
              </p>
            ))}
          </div>
          {selectedCard && (
            <div>
              <h2>{selectedCard.name}</h2>
              <img src={selectedCard.card_images[0].image_url} alt={selectedCard.name} />
            </div>
          )}
        </div>
    );
};

export default SearchBar;
