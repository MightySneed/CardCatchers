import YGO2 from '../assets/YGO2.jpg'
import Pokemo2 from '../assets/Pokemo2.jpg'
import MTG from '../assets/MTG.jpg'

const Welcome = () => {
    return (
        <div>
            <div className="img-colour img-size" id='yugioh'>
                <img src={YGO2} alt="Yu-Gi-h! Trading Card Game" className='mainImg'/>
            </div>
            <br />
            <br />
            <div className="img-colour "id='pokemon'>
                <img src={Pokemo2} alt="Pokemon Trading Card Game" className='mainImg'/>
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