import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import BilheteiraPage from "./pages/BilheteiraPage.jsx";
import RespostaStd from "./pages/RespostaStd.jsx";
import Questionario from "./components/Questionario.jsx";
import Resultados from "./components/Resultados.jsx";
import FormCandidaturaPage from "./pages/FormCandidaturaPage.jsx";
import NSeiONome from "./pages/NSeiONome.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path="/formcandidaturapage" element={<FormCandidaturaPage/>}/>
                <Route path="/bilheteirapage" element={<BilheteiraPage/>}/>
                <Route path="/respotastd" element={<RespostaStd/>}/>
                <Route path="/inquerito" element={<Questionario/>} />
                <Route path="/resultados" element={<Resultados/>} />
                <Route path="/nseionome" element={<NSeiONome/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;