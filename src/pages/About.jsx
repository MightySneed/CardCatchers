import '../App.css'
import TCGImage from '../assets/TCG-About-Image.webp'
const About = () => {
    return (
        <div>
            <h1 className="main-txt">ABOUT</h1>
            <p className="main-text">TCG Card Catchers is a dedicated platform for trading card game (TCG) enthusiasts, offering an intuitive way to organize, manage, and showcase TCG collections. Whether you're a collector of Pokémon, Yu-Gi-Oh!, Magic: The Gathering, or other popular TCGs, TCG Card Catchers makes it easy to create personalized collections, track cards, and manage rare finds. Built with a passion for gaming and collecting, our mission is to provide collectors and players with a seamless, digital experience that keeps all of their prized cards at their fingertips.</p>
            <img src={TCGImage} alt="Generic TCG Image" />
        </div>
    )
}
export default About