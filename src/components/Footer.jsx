const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col">
                    <h4>Corrida S. Silvestre</h4>
                    <p>Evento anual de corrida na cidade do Porto, onde toda a gente se diverte.</p>
                    <p>Data: 31 Dezembro</p>
                    <strong>Venha correr connosco!</strong>
                </div>

                <div className="footer-col">
                    <h4>Organizadores</h4>
                    <p>Afonso Martins</p>
                    <p>Bernardo Luziário</p>
                    <p>Carlos Reis</p>
                    <p>Dinis Lopes</p>
                </div>

                <div className="footer-col">
                    <h4>Patrocinadores</h4>

                    <ul>
                        <li><a href="https://www.lidl.pt/">Lidl</a></li>
                        <li><a href="https://tvi.iol.pt/">TVI</a></li>
                        <li><a href="https://www.edp.pt/">edp</a></li>
                        <li><a href="https://mimosa.pt/">Mimosa</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="./index.html">Início</a></li>
                        <li><a href="form_volun.html">Inscrição voluntário</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Redes Sociais</h4>
                    <ul>
                        <li><a href="https://web.facebook.com/saosilvestredelisboa">Facebook</a></li>
                        <li><a href="https://www.instagram.com/saosilvestredelisboa">Instagram</a></li>
                        <li><a href="https://www.youtube.com/playlist?list=PL1zIRddiEL3TuNTlZiNSkEFiJO8fiyWRA">YouTube</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Newsletter</h4>

                    <form>
                        <input type="email" placeholder="O teu email"/>
                        <button type="submit">Enviar</button>
                    </form>
                    <br/>

                    <strong>Contacto: +351 951 345 678</strong>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Corrida de S. Silvestre Porto</p>
            </div>

        </footer>
    )
}
export default Footer;