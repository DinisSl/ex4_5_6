import "../assets/css/styles.css"
import "../components/Header.jsx"
import Header from "../components/Header.jsx";
import Contador from "../components/Contador.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Table from "../components/Table.jsx";
import Descricao from "../components/Descricao.jsx";
import Parceiros from "../components/Parceiros.jsx";
import OutrosEventos from "../components/OutrosEventos.jsx";

const Homepage = () => {
    return (
        <>
            <Header/>
            <main>
                <Contador/>
                <Slideshow/>
                <Descricao/>
                <Parceiros/>
                <OutrosEventos/>
                <Table/>
            </main>
        </>
    )
}

export default Homepage;