import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { addToCollectionPOK } from '../utilities/addCollectionPOK';
import "../App.css"

const SearchBarPOK = ({username, setUsername}) => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [ clicked, setClicked] = useState(false);
    const containerRef = useRef(null);
 
    const fetchData = async (newPage = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${encodeURIComponent(searchTerm)}*&order=relevance,name&dir=asc&pageSize=15&page=${newPage}`);
            const fetchedCards = response.data.data;
//Appends the data  Adds another 15.
            setCards(prevCards => [...prevCards, ...fetchedCards]);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
        setLoading(false);
        }
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

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollHeight - scrollTop <= clientHeight + 50 && !loading) {
                const nextPage = page + 1;
                setPage(nextPage);
                fetchData(nextpage);
            }
        }
    };

    useEffect(() => {
        if (searchTerm) {
            const currentContainer = containerRef.current;
            if (currentContainer) {
                currentContainer.addEventListener("scroll", handleScroll);
            }
            fetchData(page);
            return () => {
                if (currentContainer) {
                    currentContainer.removeEventListener("scroll", handleScroll);
                }
            };
        }
    }, [page, searchTerm]);

    const handleATBClick = () =>{
        console.log('button added')
        addToCollectionPOK(username, selectedCard.id, selectedCard.name)
      }
    return (
        <div className="search-container POK-bkgrnd">
        <div className="search-left scrollable-list" ref={containerRef}>
          <input className="search-bar-style"
                    type="text"
                    placeholder="I'm looking for..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {loading && (
<div>
<img src="https://c.tenor.com/B5oRa2uSYfEAAAAj/notlikeduck-duck.gif" alt="Loading..." size='50px' />
<p>Please wait...</p>
</div>
                )}
                {!loading && (
<>
<div className="search-results">
                    {cards.map(card => (
<p 
                            key={card.id}
                            className="search-result-item-POK" 
                            //Locks display to clicked card
                            onClick={() => {handleCardClick(card), console.log(selectedCard)}}
                            onMouseEnter={() => handleMouseEnter(card)} //Only updates on hover if no card has been clicked
                            style={{ cursor: 'pointer' }}
                        >
                            {card.name}
                        </p>
                    ))}
                </div>
            </>
                )}
            </div>
            <div className="search-right">
                {selectedCard && (
                    <div className="card-info-container ">
                        <h2 className="Heading-bkgrnd-POK">{selectedCard.name}</h2>
                        <img className="card-styling" src={selectedCard.images.large} alt={selectedCard.name} />
                        <div className="txt-bkgrnd-POK">

                        <p>Type: {selectedCard.types?.join(', ')}</p>
                        <p>Set: {selectedCard.set.name}</p>
                        <button className="add-to-button" onClick={handleATBClick}>Add to Collection</button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default SearchBarPOK;
 