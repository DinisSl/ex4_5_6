import figuras from '../assets/json/entidades.json';
import "../assets/css/GaleriaStyle.css"

const Entidades= figuras["Entidades"]


const Entidade = ({nome,img,highlight,desc}) => {

    return (
        <div className="card">
            <img src={img} alt={nome} />
            <div className="card-content">
                <h2>{nome}</h2>
                <div className="highlight">{highlight}</div>
                <p>{desc}</p>
            </div>
        </div>
    )
}




const Galeria =() => {

    return(
        <div className="galeria">
            <h1>
                Participantes
            </h1>
            <div className= "grid-galeria">
            {Entidades.map(E => <Entidade nome={E.nome} img={E.img} highlight={E.highlight} desc={E.desc} />)}
            </div>
        </div>
    )
}

export default Galeria;