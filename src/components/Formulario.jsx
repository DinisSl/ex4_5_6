import {useState} from "react";
import "../assets/css/FormStyle.css"

const Formulario = () => {

    const opcoes = ["Quim Barreiros", "Pepe", "Mariana Machado", "Rui Pinto"];

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const changeHandler = (e) => {
        setOpcaoSelecionada(e.target.value);
    }

    return (
        <div className="containerf">
            <div className="form-box">
                <h1>Quem gostou mais de conhecer?</h1>
                {
                    opcoes.map
                    (o =>
                        <>
                            <label className = "option">
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
                <button onClick={() => alert("As pessoas adoraram a presença de " + opcaoSelecionada)}>Submeter</button>
            </div>
        </div>
    );
};

export default Formulario;