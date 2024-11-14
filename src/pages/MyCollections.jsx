import Collection from "./CreateCollection"
import Game from "./Game"

const MyCollections = () => {
    return (
        <div>
            <br />
            <br />
            <h1>Your Collections</h1>
            <button className="new-collection-bttn">New Collection</button>
            <a href="/all-collections"><button className="view-collections-bttn">View All Collections</button></a>
            <Collection game={Game}/>

        </div>
    )
}
export default MyCollections