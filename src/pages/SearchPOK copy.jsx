import React, { useState } from 'react';
import axios from 'axios';

function SearchBarPOKCopy() {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${encodeURIComponent(searchTerm)}*`);
            setCards(response.data.data);
            setCards(response.data.data.slice(0, 15));
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
                <input
                    type="text"
                    placeholder="I'm looking for..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
                <ul>
                    {cards.map(card => (
                        <li 
                            key={card.id} 
                            onClick={() => setSelectedCard(card)}
                            style={{ cursor: 'pointer' }}
                        >
                            {card.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ width: '50%', marginLeft: '20px' }}>
                {selectedCard && (
                    <div>
                        <h2>{selectedCard.name}</h2>
                        <img src={selectedCard.images.large} alt={selectedCard.name} />
                        <p>Type: {selectedCard.types?.join(', ')}</p>
                        <p>Set: {selectedCard.set.name}</p>
                        <button>Add to Collection</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBarPOKCopy;
