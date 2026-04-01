import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/FormStyle.css"

const Questionario = () => {

    const opcoes = ["Quim Barreiros", "Pepe", "Mariana Machado", "Rui Pinto"];

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setOpcaoSelecionada(e.target.value);
    }

    const handleSubmit = () => {
        let stats = localStorage.getItem("inqueritoStats");
        if (stats === null) {
            stats = {};
            opcoes.forEach(o => stats[o] = 0);
        } else {
            stats = JSON.parse(stats);
        }
        stats[opcaoSelecionada]++;
        localStorage.setItem("inqueritoStats", JSON.stringify(stats));
        navigate("/resultados", { state: { resposta: opcaoSelecionada } });
    };

    return (
        <div className="containerf">
            <div className="form-box">
                <h1>Quem gostou mais de conhecer?</h1>
                {
                    opcoes.map
                    (o =>
                        <>
                            <label className = "option" key={o}>
                                <input
                                    name="grp1"
                                    type="radio"
                                    value={o}
                                    onChange={changeHandler}
                                />{o}
                            </label>
                        </>
                    )
                }
                <button onClick={handleSubmit}>Submeter</button>
            </div>
        </div>
    );
};

export default Questionario;