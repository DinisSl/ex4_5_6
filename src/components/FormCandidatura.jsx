import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FormCandidatura = () => {
    const navigate = useNavigate();

    const palavrasObscenas = ["alcoviteiro", "biltre", "beocio", "beócio", "calhorda", "energúmeno", "energumeno", "janota", "mentecapto",
    "mequetrefe", "mocorongo", "paspalho", "palerma", "patife", "pulha", "purgante", "sacripanta"];
    const [comentario, setComentario] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [inputs, setInputs] = useState({
            nome: "",
            telemovel: "",
            email: "",
            dataInicio: "",
            dataFim: "",
            gr1: ""
        });
    const changeHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const handlePalavrasObscenas = (e) => {
        const novoTexto = e.target.value;
        setComentario(novoTexto);

        const lowerCase = novoTexto.toLowerCase();

        const plvrObscenaEncontrada =
            palavrasObscenas.filter((word) => lowerCase.includes(word.toLowerCase()));

        if (plvrObscenaEncontrada.length > 0) {
            setMensagem("Modere a sua linguagem. Precisa de pimenta na língua!");
        } else {
            setMensagem("");
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/respotastd',
            {state: {msg: "Candidatura submetida com sucesso!!!"}});
    };


    return (
        <div className="container">
            <div id="box0-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label><br/>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            value={inputs.nome}
                            onChange={changeHandler}
                        />
                        <br/><br/>

                        <label htmlFor="indicativo">Telemóvel:</label><br/>
                        <div id="phone-container">
                            <select name="indicativo" id="indicativo">
                                <option value="+351">+351 (Portugal)</option>
                                <option value="+34">+34 (Espanha)</option>
                                <option value="+33">+33 (França)</option>
                            </select>

                            <input
                                id="telemovel"
                                name="telemovel"
                                type="tel"
                                value={inputs.telemovel}
                                onChange={changeHandler}
                            />
                        </div>
                        <br/>

                        <label htmlFor="email">Email:</label><br/>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={inputs.email}
                            onChange={changeHandler}
                        />
                        <br/><br/>

                        <label htmlFor="data_inicio">Data de início:</label><br/>
                        <input
                            id="data_inicio"
                            name="data_inicio"
                            type="datetime-local"
                            value={inputs.dataInicio}
                            onChange={changeHandler}
                        />
                        <br/><br/>

                        <label htmlFor="data_fim">Data fim:</label><br/>
                        <input
                            id="data_fim"
                            name="data_fim"
                            type="datetime-local"
                            value={inputs.dataFim}
                            onChange={changeHandler}
                        />
                        <br/><br/>
                    </div>

                    <label>Tarefa a realizar</label>
                    <fieldset>
                        <label><input
                            type="radio"
                            name="gr1"
                            value="agua"
                            onChange={changeHandler}
                            checked={inputs.gr1 === "agua"}
                        />Distribuir águas</label><br/>
                        <label><input
                            type="radio"
                            name="gr1"
                            value="peitorais"
                            onChange={changeHandler}
                            checked={inputs.gr1 === "peitorais"}
                        />Entregar os peitorais</label><br/>
                        <label><input
                            type="radio"
                            name="gr1"
                            value="medalhas"
                            onChange={changeHandler}
                            checked={inputs.gr1 === "medalhas"}
                        />Entregar medalhas na meta</label><br/>
                        <label><input
                            type="radio"
                            name="gr1"
                            value="limpezas"
                            onChange={changeHandler}
                            checked={inputs.gr1 === "limpezas"}
                        />Apoiar nas limpezas</label>
                    </fieldset>
                    <br/>


                    <label>Comentário sobre o evento:</label><br/>
                    <textarea
                        rows="4"
                        value={comentario}
                        onChange={handlePalavrasObscenas}
                    ></textarea>

                    <p
                        id="mensagem"
                        style={{ color: 'red' }}
                    >{mensagem}</p>

                    <input
                        id="submit-button"
                        type="submit"
                        value="Enviar resposta"
                        disabled={mensagem !== ""}
                    />
                </form>
            </div>

            <div id="box1-container">
                <img src="/voluntarios.png" alt="voluntários"/>
            </div>

        </div>
    )
}

export default FormCandidatura;