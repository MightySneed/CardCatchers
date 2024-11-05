import YGO from '../assets/YGO.jpg'
import Pokemon from '../assets/Pokemon.jpg'
import MTG from '../assets/MTG.jpg'

const Welcome = () => {
    return (
        <div>
            <div id='yugioh'>
                <img src={YGO} alt="Yu-Gi-h! Trading Card Game" />
                <h2>Yu-Gi-Oh!</h2>
            </div>
            <div id='pokemon'>
                <img src={Pokemon} alt="Pokemon Trading Card Game" />
                <h2>Pokemon</h2>
            </div>
            <div id='magic'>
                <img src={MTG} alt="Magic the Gathering Trading Card Game" />
                <h2>Magic the Gathering</h2>
            </div>
        </div>
    )
}
export default Welcome