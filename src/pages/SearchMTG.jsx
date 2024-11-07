import React, { useState } from 'react';
import axios from 'axios';

function SearchMTG() {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(searchTerm)}&unique=prints&order=released&dir=desc`);
            const limitedResults = response.data.data.slice(0, 10);
            setCards(limitedResults);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ width: '50%' }}>
            <div>
                <input
                    type="text"
                    placeholder="I'm looking for..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
            </div>
                <>
                    {cards.map(card => (
                        <p 
                            key={card.id} 
                            onClick={() => setSelectedCard(card)}
                            style={{ cursor: 'pointer' }}
                        >
                            {card.name}
                        </p>
                    ))}
                </>
            </div>
            <div style={{ width: '50%', marginLeft: '20px' }}>
                {selectedCard && (
                    <div>
                        <h2>{selectedCard.name}</h2>
                        <img src={selectedCard.image_uris?.large} alt={selectedCard.name} />
                        <p>{selectedCard.oracle_text}</p>
                        <button>Add to Collection</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchMTG;
