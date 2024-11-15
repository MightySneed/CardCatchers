import React, { useState, useEffect } from 'react';
import readCookie from '../utilities/readCookie';
import '../App.css';
import ViewAllCards from './listCardsInDeck';
 
const ViewAllCollections = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collections, setcollections] = useState([]);
    const [cardsVisible, setCardsVisible] = useState(false);
 
    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const token = readCookie('jwt_token')
                console.log(token)
                const auth = 'Bearer ' + token
                const res = await fetch(
                    "https://cardcatchersbackend-production.up.railway.app/listCols",
                    {
                        method: "GET",
                        headers: {"Content-Type":"application/json",
                            "Authorization": auth
                        }
                    }
                )
                const data = await res.json();
                setcollections(data);
                console.log(data);
                console.log(collections);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };
 
        fetchCollections();
    }, []);

    const groupedCollections = collections.reduce((acc, collection) => {
        const { colGame } = collection;
        if (!acc[colGame]) {
          acc[colGame] = [];
        }
        acc[colGame].push(collection);
        return acc;
      }, {});

      const handleDeleteCollection = async (colID) => {
        const token = readCookie('jwt_token')
        console.log(token)
        const auth = 'Bearer ' + token
        const response = await fetch (`https://cardcatchersbackend-production.up.railway.app/deleteCol`,
            { method: 'DELETE',
                headers: {"Content-Type":"application/json",
                    "Authorization": auth,
                },
                body : JSON.stringify({
                    colID : colID
                })

            });
            if (response.ok) {
                setcollections((prevCollections) => prevCollections.filter((collection) => collection.colID !== colID));
                console.log('Collection deleted successfully'); }
                else { console.log('Error deleting collection'); }
            };
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    if (error) {
        return <div>Error: {error}</div>;
    }
 
    return (
        <div>
          <h1 className="main-txt">All Collections</h1>
          <div>
            {Object.keys(groupedCollections).map((game) => {
              const GameTag =
                game === "MTG" ? "Magic The Gathering" :
                game === "POK" ? "Pokémon" :
                game === "YGO" ? "Yu-Gi-Oh!" :
                "Unknown Game";
    
              return (
                <div key={game} className="game-group">
                  <h2>{GameTag}</h2>
                  {groupedCollections[game].map((collection) => {
                    const fontClass =
                      collection.colGame === "MTG" ? "MTG-txt" :
                      collection.colGame === "POK" ? "POK-txt" :
                      collection.colGame === "YGO" ? "YGO-txt" :
                      "main-txt";
                    return (
                      <div key={collection.colID} className="card-item">
                        <h3 className={fontClass}>{collection.colName}</h3>
                        <button className='del-acc-bttn' onClick={() => handleDeleteCollection(collection.colID)}>Delete Collection</button> 
                        <button className='view-collections-bttn' onClick={()=> setCardsVisible(true)}>View Cards</button>
                        {cardsVisible && <ViewAllCards></ViewAllCards>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
export default ViewAllCollections






