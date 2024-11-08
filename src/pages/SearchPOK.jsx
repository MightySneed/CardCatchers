import React, { useState } from 'react';
import axios from 'axios';

function SearchBarPOK() {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = async (newPage = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${encodeURIComponent(searchTerm)}*&order=relevance,name&dir=asc&pageSize=15&page=${newPage}`);
            const fetchedCards = response.data.data;
//Appends the data  Adds another 15.
            setCards(prevCards => newPage === 1 ? fetchedCards : [...prevCards, ...fetchedCards]);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        setLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData();
            setPage(1);  // Reset to the first page on new search
        }
    };

    const loadMoreResults = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
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
                {loading && (
                    <div>
                        <img src="https://c.tenor.com/B5oRa2uSYfEAAAAj/notlikeduck-duck.gif" alt="Loading..." size='50px' />
                        <p>Please wait...</p>
                    </div>
                )}
                {!loading && (
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
                {cards.length > 0 && (
                    <button onClick={loadMoreResults}>Load More</button>
                )}
            </>
                )}
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

export default SearchBarPOK;
