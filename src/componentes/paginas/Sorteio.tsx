import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"
import ListaParticipantes from "../Card/ListaParticipantes"

const Sorteio = () => {

    const participantes = useListaDeParticipantes()
    return (<section>
        <form>
            <select name="participanteDavez" id="participanteDavez">
                {participantes.map(participante => <option key={participante}>{participante}</option>)}
            </select>
        </form>
    </section>)
}

export default Sorteio