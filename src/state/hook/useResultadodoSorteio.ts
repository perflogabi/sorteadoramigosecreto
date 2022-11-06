import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useResultadodoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecreto)
}