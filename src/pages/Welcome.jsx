import YGO from '../assets/YGO.jpg'
import Pokemon from "../assets/Pokemon.jpg"
import MTG from '../assets/MTG.jpg'
import { Link } from "react-router-dom"
 
const Welcome = () => {
    return (
        <div class>
        <div className="img-container" id='yugioh'>
        <Link to="/search">
            <img src={YGO} alt="Yu-Gi-h! Trading Card Game" className='mainImg img-size img-colour'/>
            </Link>
        </div>
        <br />
        <br />
        <div className="img-container"id='pokemon'>
        <Link to="/search">
            <img src={Pokemon} alt="Pokemon Trading Card Game" className='mainImg img-size img-colour'/>
        </Link>
        </div>
        <br />
        <br />
        <div className="img-container"id='magic'>
        <Link to="/search">
            <img src={MTG} alt="Magic the Gathering Trading Card Game" className='mainImg img-size img-colour'/>
        </Link>
        </div>
    </div>
    )
}
export default Welcome