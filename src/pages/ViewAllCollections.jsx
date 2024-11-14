import React, { useState, useEffect } from 'react';
import readCookie from '../utilities/readCookie';
import App from '../App';

const ViewAllCollections = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div>
            <h1>All Collections</h1>
            <h2>Yu-Gi-Oh!</h2>
            <ul>
                <li><h4>YGO 1</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
                <li><h4>YGO 2</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
            </ul>
            <h2>Pokemon</h2>
            <ul>
                <li><h4>PKMN 1</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
                <li><h4>PKMN 2</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
            </ul>
            <h2>Magic The Gathering</h2>
            <ul>
                <li><h4>MTG 1</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
                <li><h4>MTG 2</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
            </ul>
        
        <div>
        <h2>Your Stored Cards</h2>
        <div>
            {cards.map((card) => {
                return (
                <div key={card.id} className="card-item">
                    <h3>{card.name}</h3>
                    <a href={card.image_url} target="_blank" rel="noopener noreferrer">View Card</a>
                </div>)
})}
        </div>
    </div>
    </div>
    )
}
export default ViewAllCollections
