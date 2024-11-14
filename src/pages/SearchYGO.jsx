import React, { useState } from 'react';
import axios from 'axios';
import { addToCollectionYGO } from '../utilities/addCollectionYGO';

const SearchBarYGO = ({username, setUsername}) => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [ clicked, setClicked] = useState(false);

    const fetchData = async (newPage = 1) => {
        setLoading(true);
        try {
          const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(searchTerm)}&num=15&offset=${(newPage - 1) * 15}`);
            const fetchedCards = response.data.data;

            // If loading more, append the new results to the existing cards
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

    const handleMouseEnter = (card) => {
        if (!clicked) {
            setSelectedCard(card);
        }
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setClicked(true);
    };


    const loadMoreResults = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
    };

    const handleATBClick = () =>{
        console.log('button added')
        addToCollectionYGO(username, selectedCard.ygoprodeck_url, selectedCard.name)
      }
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
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/68151cd9-1bef-4fab-9efc-03389ccdb968/dd4e0au-8d1adef7-d55f-41a7-b471-6916fb21205d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4MTUxY2Q5LTFiZWYtNGZhYi05ZWZjLTAzMzg5Y2NkYjk2OFwvZGQ0ZTBhdS04ZDFhZGVmNy1kNTVmLTQxYTctYjQ3MS02OTE2ZmIyMTIwNWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6YKpgTLoFD8_wKt9kXgcZrcvoxW4cP-xrArGKAze82Q" alt="Loading..." width='50' />
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
                                    //Locks display to clicked card
                                    onClick={() => {handleCardClick(card), console.log(selectedCard)}}
                                    onMouseEnter={() => handleMouseEnter(card)} //Only updates on hover if no card has been clicked
                                    style={{ cursor: 'pointer' }}
                                >
                                    {card.name}
                                </p>
                            ))}
                        {cards.length > 0 && (
                            <button className="load-more-bttn" onClick={loadMoreResults}>Load More</button>
                        )}
                        </div>
                    </>
                )}
                
            </div>
            <div className="search-right">
                {selectedCard && (
                     <div className="card-info-container text-style">
                        <h2>{selectedCard.name}</h2>
                        <img  className="card-styling" src={selectedCard.card_images[0].image_url} alt={selectedCard.name} />
                        <p><strong>Type:</strong> {selectedCard.type}</p>
                        <p><strong>Description:</strong> {selectedCard.desc}</p>
                        <p><strong>Attack:</strong> {selectedCard.atk != null ? selectedCard.atk : 'N/A'}</p>
                        <p><strong>Defense:</strong> {selectedCard.def != null ? selectedCard.def : 'N/A'}</p>
                        <p><strong>Level:</strong> {selectedCard.level != null && selectedCard.level !== 0 ? selectedCard.level : 'N/A'}</p>
                        <p><strong>Attribute:</strong> {selectedCard.attribute != null ? selectedCard.attribute : 'N/A'}</p>
                        <button className="add-to-button" onClick={handleATBClick}>Add to Collection</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBarYGO;
