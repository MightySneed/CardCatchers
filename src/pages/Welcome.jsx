import YGO from '../assets/YGO.jpg';
import Pokemon from "../assets/Pokemon.jpg";
import MTG from '../assets/MTG.jpg';
import { useNavigate } from 'react-router-dom';
// import POK-sound from "../assets/POK-sound.wav"
import pokSound from '../assets/POK-Sound.wav'

const Welcome = () => { 
    const navigate = useNavigate();

    const ImageGallery = () => {
        const audio = new Audio(soundFile)
    }

    const ygoClick = () => {
        navigate('/search', { state: { selectedGame: 'YGO' } });
        console.log('EXODIA, OBLITERATE!')
        playSound(YGO-sound);
    };

    const pkmnClick = () => {
        navigate('/search', { state: { selectedGame: 'POK' } });
        console.log('Pikaaaa-chu')
        playSound(POK-sound);
    };

    const mtgClick = () => {
        navigate('/search', { state: { selectedGame: 'MTG' } });
        console.log('Theres no such thing as magic')
        playSound(MTG-sound)
    };

    return (
        <div className="image-float-container">
            <div className="img-container" id='yugioh'>
                <img src={YGO} alt="Yu-Gi-Oh Trading Card Game" className='mainImg' onClick={ygoClick} />
            </div>
            <div className="img-container" id='pokemon'>
                <img src={Pokemon} alt="Pokemon Trading Card Game" className='mainImg' onClick={pkmnClick} />
            </div>
            <div className="img-container" id='magic'>
                <img src={MTG} alt="Magic the Gathering Trading Card Game" className='mainImg' onClick={mtgClick} />
            </div>
        </div>
    );
};

export default Welcome;
