import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const RespostaStd = () => {
    const location = useLocation();
    const msgRecebida = location.state.msg;

    const style = {
        textAlign: "center",
        color: "#28a745",
        marginTop: "50px",
        minHeight: "50px"
    };

    return (
        <>
            <Header/>
                <div style={style}>
                    <h1>{msgRecebida}</h1>
                </div>

            <Footer/>
        </>
    )
}

export default RespostaStd;