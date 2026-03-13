const Table = () => {

    return(

        <div id="box6">
            <section>
                <h2>Agenda do Evento</h2>

                <table><thead>
                <tr>
                    <th>Hora</th>
                    <th>Eventos</th>
                    <th>Local</th>
                    <th>Observações</th>
                </tr></thead>
                    <tbody>
                    <tr>
                        <td>14:00</td>
                        <td>Abertura do recinto</td>
                        <td>Zona de partida</td>
                        <td>Levantamentos de dorsais</td>
                    </tr>
                    <tr>
                        <td>15:30</td>
                        <td>Palestra dos patrocinadores</td>
                        <td>Palco secundário</td>
                        <td>Lidl-(CEO)Kenneth McGrath</td>
                    </tr>
                    <tr>
                        <td>16:30</td>
                        <td>Debate sobre alimentação</td>
                        <td>Palco secundário</td>
                        <td>Com especialistas muito especializados</td>
                    </tr>
                    <tr>
                        <td>17:30</td>
                        <td>Aquecimento</td>
                        <td>Zona de partida</td>
                        <td>Com uma senhora da hidroginástica</td>
                    </tr>
                    <tr>
                        <td>18:00</td>
                        <td>Início da corrida</td>
                        <td>Zona de partida</td>
                        <td>----</td>
                    </tr>
                    <tr>
                        <td>20:00</td>
                        <td>Entrega de prémios</td>
                        <td>Palco principal</td>
                        <td>Top 3</td>
                    </tr>
                    <tr>
                        <td>22:00</td>
                        <td>Encerramento</td>
                        <td>----</td>
                        <td>Fim do evento com Quim Barreiros</td>
                    </tr>
                    </tbody></table>
            </section>
        </div>
    )

}

export default Table;