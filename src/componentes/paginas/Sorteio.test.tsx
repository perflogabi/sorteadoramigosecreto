import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import { useResultadodoSorteio } from "../../state/hook/useResultadodoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
jest.mock('../state/hook/useResultadodoSorteio', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participantes = [
        'Ana',
        'Carolina',
        'Samuel',
        'Maria'
    ]
    const resultado = new Map([
        ['Ana', 'Carolina'],
        ['Carolina', 'Maria'],
        ['Maria', 'Samuel'],
        ['Samuel', 'Ana']
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
        (useResultadodoSorteio as jest.Mock).mockReturnValue(resultado)
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Selecione o seu nome')

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()
    })
})