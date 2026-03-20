import '../assets/css/hero-style.css'

const GaleriaDoStor = ({title, heroes}) => {
    return (
        <div className="centered-text">
            <h1>{title}</h1>
            { heroes.map( h => <Hero name={h.name} image={h.image}/>) }
        </div>
    )
}
export default GaleriaDoStor;

const Hero = ({name, image}) => {
    const IMGPATH = './images/heroes/'
    return (
        <div className="superhero">
            <img src={IMGPATH + image} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}