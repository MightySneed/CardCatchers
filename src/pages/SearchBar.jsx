import { useState } from 'react';
import axios from 'axios';
import Game from './game';


const SearchBar = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const [selectedGame, setSelectedGame] = useState('YGO');

    const fetchData = async (searchValue) => {
        try {
            let data;
            if (selectedGame === 'YGO') {
                const response = await axios.get(
                  `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchValue}`
                );
                data = response.data;
            } else if (selectedGame ==='MTG') {
                const response = await axios.get(
                    `https://api.scryfall.com/cards/named?fuzzy=${searchValue}`
                  );
                  data= response.data;
            } else if (selectedGame ==='POK') {
                const response = await axios.get(
                    `https://api.pokemontcg.io/v2/cards/qname:${searchValue}`
                  );
                  data = response.data;
            } else {
                data=[];}
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

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ width: '50%' }}>
            <Game selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
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
              {suggestions.map((item, index) => (
                <p key={index} onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div style={{ width: '50%', marginLeft: '20px' }}>
            {selectedCard && (
              <div>
                <h2>{selectedCard.name}</h2>
                <img src={selectedCard.card_images[0].image_url} alt={selectedCard.name} />
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
                <button>Add to Collection</button>
              </div>
            )}
          </div>

        </div>
    );
};

export default SearchBar;
