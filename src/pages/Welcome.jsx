import YGO from '../assets/YGO.jpg'
import Pokemon from "../assets/Pokemon.jpg"
import MTG from '../assets/MTG.jpg'
 
const Welcome = () => {
    return (
        <div class>
        <div className="img-container" id='yugioh'>
            <img src={YGO} alt="Yu-Gi-h! Trading Card Game" className='mainImg img-size img-colour'/>
        </div>
        <br />
        <br />
        <div className="img-container"id='pokemon'>
            <img src={Pokemon} alt="Pokemon Trading Card Game" className='mainImg img-size img-colour'/>
        </div>
        <br />
        <br />
        <div className="img-container"id='magic'>
            <img src={MTG} alt="Magic the Gathering Trading Card Game" className='mainImg img-size img-colour'/>
        </div>
    </div>
    )
}
export default Welcome