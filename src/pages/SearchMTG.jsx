import React, { useState } from 'react';
import axios from 'axios';
import { addToCollectionMTG } from '../utilities/addCollectionMTG';

const SearchBarMTG = () => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
 
    const fetchData = async (newPage = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(searchTerm)}&order=relevance,name&dir=asc&page=${newPage}`);
            const fetchedCards = response.data.data;
            setCards(prevCards => newPage === 1 ? fetchedCards.slice(0, 15) : [...prevCards, ...fetchedCards.slice(0, 15)]);
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
        <div className="search-container">
            <div className="search-left">
                <input className="search-bar-style"
                    type="text"
                    placeholder="I'm looking for..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {loading && (
                    <div>
                        <img src="https://th.bing.com/th/id/R.5df58aa5cd7541b23ca01a1c0b11a90d?rik=URPWbroIhDw71g&pid=ImgRaw&r=0" alt="Loading..." width='50' />
                        <p>Please wait...</p>
                    </div>
                )}
                {!loading && (
                    <>
                    <div className="search-results">
                    {cards.map(card => (
                        <p 
                            key={card.id}
                            className="search-result-item"  
                            onClick={() => {setSelectedCard(card), console.log(selectedCard)}}
                            style={{ cursor: 'pointer' }}
                        >
                            {card.name}
                        </p>
                    ))}
                    </div>
                {cards.length > 0 && (
                    <button className="load-more-bttn" onClick={loadMoreResults}>Load More</button>
                )}
            </>
                )}
            </div>
            <div className="search-right">
                {selectedCard && (
                    <div className="card-info-container text-style">
                        <h2>{selectedCard.name}</h2>
                        <img className="card-styling" src={selectedCard.image_uris?.large} alt={selectedCard.name} />
                        <p>{selectedCard.oracle_text}</p>
                        <button className="add-to-button" onClick={handleATBClick}>Add to Collection</button>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default SearchBarMTG;
 