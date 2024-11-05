import { useState, useEffect } from "react";

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
                <img src={card.card_images[0].image_url} alt={card.name} width="200" />
              )}
              <p><strong>Type:</strong> {card.type}</p>
              <p><strong>Description:</strong> {card.desc}</p>
              <p><strong>Attack:</strong> {card.atk}</p>
              <p><strong>Defense:</strong> {card.def}</p>
              <p><strong>Level:</strong> {card.level}</p>
              <p><strong>Attribute:</strong> {card.attribute}</p>
              <button>Add to Collection</button>
            </li>

          ))}
        </ul>
        </div>
    )
}
export default Search
