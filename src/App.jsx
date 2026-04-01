import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import FormCandidatura from "./pages/FormCandidaturaPage.jsx";
import BilheteiraPage from "./pages/BilheteiraPage.jsx";
import RespostaStd from "./pages/RespostaStd.jsx";
import Formulario from "./components/Formulario.jsx";
import Resultados from "./components/Resultados.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path="/formcandidatura" element={<FormCandidatura/>}/>
                <Route path="/bilheteira" element={<BilheteiraPage/>}/>
                <Route path="/respotastd" element={<RespostaStd/>}/>
                <Route path="/inquerito" element={<Formulario />} />
                <Route path="/resultados" element={<Resultados />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;