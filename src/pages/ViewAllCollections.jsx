const ViewAllCollections = () => {
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
        </div>
    )
}
export default ViewAllCollections