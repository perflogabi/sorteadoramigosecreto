import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o proprio nome', () => {
        const participantes = [
            'Ana',
            'Catarina',
            'Juliane',
            'João',
            'Vinícius',
            'Nathalia'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participantes)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})