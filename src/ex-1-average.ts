/* Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6. */
import { Average } from "./types"

export const averageCalc = (number1: number, number2: number): Average =>{
    let averageCalculated = (number1 + number2) / 2

    let result: Average

    let objResult = {
        result1: result = {
            averageResult: averageCalculated,
            status: "APROVADO",
        },

        result2: result = {
            averageResult: averageCalculated,
            status: "REPROVADO"
        }
    }

    return averageCalculated >=6 ? objResult.result1 : objResult.result2
}
