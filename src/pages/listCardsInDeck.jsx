import React, { useState, useEffect } from 'react';
import readCookie from '../utilities/readCookie';


const ViewAllCards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const token = readCookie('jwt_token')
                console.log(token)
                const auth = 'Bearer ' + token
                const res = await fetch(
                    "https://cardcatchersbackend-production.up.railway.app/listAllCards",
                    {
                        method: "GET",
                        headers: {"Content-Type":"application/json", 
                            "Authorization": auth
                        }
                    }
                )
                const data = await res.json();
                setCards(data);
                console.log(data);
                console.log(cards);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };

        fetchCards();
    }, []);




        if (loading) {
          return <div>Loading...</div>;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
        return (
          <> 
           <div>
              <h3 className="main-txt">Your Deck</h3>
              <div>
                {cards.map((card) => {
                  const fontClass =
                    card.game === "MTG" ? "MTG-txt" :
                    card.game === "POK" ? "POK-txt" :
                    card.game === "YGO" ? "YGO-txt" :
                    "main-txt";
                  return (
                    <div key={card.id} className="card-item">
                      <p className={fontClass}>{card.name}</p>
                      <a className="main-txt" href={card.url} target="_blank" rel="noopener noreferrer">View Card</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      };
      
      export default ViewAllCards;
      