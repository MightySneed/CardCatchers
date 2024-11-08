import YGO from '../assets/YGO.jpg'
import Pokemon from "../assets/Pokemon.jpg"
import MTG from '../assets/MTG.jpg'

const Welcome = () => {
    return (
        <div>
        <div className="img-colour img-size" id='yugioh'>
            <img src={YGO} alt="Yu-Gi-h! Trading Card Game" className='mainImg'/>
        </div>
        <br />
        <br />
        <div className="img-colour "id='pokemon'>
            <img src={Pokemon} alt="Pokemon Trading Card Game" className='mainImg'/>
        </div>
        <br />
        <br />
        <div className="img-colour "id='magic'>
            <img src={MTG} alt="Magic the Gathering Trading Card Game" className='mainImg'/>
        </div>
    </div>
    )
}
export default Welcome