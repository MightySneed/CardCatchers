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
            <h1 className="main-txt">All Collections</h1>
            <h2 className="YGO-txt">Yu-Gi-Oh!</h2>
            <ul>
                <li><h4 className="YGO-txt">YGO 1</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
                <li><h4 className="YGO-txt">YGO 2</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
            </ul>
            <h2 className="POK-txt">Pokemon</h2>
            <ul>
                <li><h4 className="POK-txt">PKMN 1</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
                <li><h4 className="POK-txt">PKMN 2</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
            </ul>
            <h2 className="MTG-txt">Magic The Gathering</h2>
            <ul>
                <li><h4 className="MTG-txt">MTG 1</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
                <li><h4 className="MTG-txt">MTG 2</h4><button className="del-acc-bttn">Delete</button><button className="collections-bttn">View</button></li>
            </ul>
        
        <div>
        <h2 className="main-txt">Your Stored Cards</h2>
        <div>
            {cards.map((card) => {
                const fontClass =
                card.game === "MTG" ? "MTG-txt" :
                card.game === "POK" ? "POK-txt" :
                card.game === "YGO" ? "YGO-txt" :
                "main-txt";
                return (
                <div key={card.id} className="card-item">
                    <h3 className={fontClass}>{card.name}</h3>
                    <a className="main-txt" href={card.url} target="_blank" rel="noopener noreferrer">View Card</a>
                </div>)
})}
        </div>
    </div>
    </div>
    )
}
export default ViewAllCollections
