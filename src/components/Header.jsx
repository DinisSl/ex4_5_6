import { Link } from 'react-router-dom'; // 1. Import the Link component

const Header = () => {
    return (
        <>

            <header>

            </header>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/formcandidaturapage">Formulário</Link>
                    </li>
                    <li>
                        <Link to="/bilheteirapage">Bilhetes</Link>
                    </li>
                    <li>
                        <Link to="/nseionome">nseionome</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Header;