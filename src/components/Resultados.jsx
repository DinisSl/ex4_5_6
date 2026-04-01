import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/Resultados.css";

const Resultados = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const resposta = location.state.resposta;

    const stats = JSON.parse(localStorage.getItem("inqueritoStats"));

    return (

    <div className="resultados-container">
            <h1>O teu artista favorito:</h1>
            <h2>{resposta}</h2>

            <h3>Resultados acumulados:</h3>

            {Object.keys(stats).map(opcao =>
                <p key={opcao}>
                    {opcao}: {stats[opcao]} votos
                </p>
            )}

            <button onClick={() => navigate("/nseionome")}>Voltar</button>
        </div>
    );
};

export default Resultados;