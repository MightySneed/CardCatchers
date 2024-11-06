import { useState, useEffect } from "react";
import "../App.css"

const Search = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(response => response.json())
        .then(data => {
          // Set the full data for each card
          setCards(data.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching card data:', error);
          setLoading(false);
        });
    }, []);

    return (
        <div>
        <ul>
          {cards.slice(0,10).map((card) => (
            <li key={card.id}>
              <h2>{card.name}</h2>
              {card.card_images && card.card_images[0] && (
                <img src={card.card_images[0].image_url} alt={card.name} />
              )}
              <p><strong>Type:</strong> {card.type}</p>
              <p><strong>Description:</strong> {card.desc}</p>
              <p><strong>Attack:</strong> {card.atk != null ? card.atk : 'N/A'}</p>
              <p><strong>Defense:</strong> {card.def != null ? card.def : 'N/A'}</p>
              <p><strong>Level:</strong> {card.level != null && card.level !== 0 ? card.level : 'N/A'}</p>
              <p><strong>Attribute:</strong> {card.attribute != null ? card.attribute : 'N/A'}</p>
              <button >Add to Collection</button>
            </li>))}
        </ul>
        </div>
    )
}
export default Search
