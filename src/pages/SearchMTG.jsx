import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { addToCollectionMTG } from '../utilities/addCollectionMTG';
 
const SearchBarMTG = ({username}) => {
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
            const response = await axios.get(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(searchTerm)}&order=relevance&unique,name&dir=asc&page=${newPage}`);
            const fetchedCards = response.data.data;
            fetchedCards.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
            setCards(prevCards => newPage === 1 ? fetchedCards.slice(0, 15) : [...prevCards, ...fetchedCards.slice(0, 15)]);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        setLoading(false);
    };
 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchData(1);
            setCards([])
            fetchData(1);   // Reset to the first page on new search
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
//scroll func
    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollHeight - scrollTop <= clientHeight + 50 && !loading) {
                const nextPage = page + 1;
                setPage(nextPage);
                fetchData(nextPage);
            }
        }
    };
 
    useEffect(() => {
        if (searchTerm) {
            const currentContainer = containerRef.current;
            if (currentContainer) {
                currentContainer.addEventListener("scroll", handleScroll);
            }
            return () => {
                if (currentContainer) {
                    currentContainer.removeEventListener("scroll", handleScroll);
                }
            };
        }
    }, [page, searchTerm]);
 
    const handleATBClick = () =>{
        console.log('button added')
        addToCollectionMTG(username, selectedCard.scryfall_uri, selectedCard.name)
      }
 
    return (
        <div className="search-container MTG-bkgrnd">
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
                            className="search-result-item-MTG"  
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
                    <div className="card-info-container">
                        <h2 className="Heading-bkgrnd-MTG">{selectedCard.name}</h2>
                        <img className="card-styling" src={selectedCard.image_uris?.large} alt={selectedCard.name} />
                    <div className="txt-bkgrnd-MTG">
                        <p>{selectedCard.oracle_text}</p>
                        <button className="add-to-button">Add to Collection</button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default SearchBarMTG;
