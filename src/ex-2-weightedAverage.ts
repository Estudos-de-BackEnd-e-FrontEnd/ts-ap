/* Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado */

import { AverageWeighted } from "./types"

export const weightedAverageCalc = (list: AverageWeighted[]): string =>{
    let grade = 0
    let counter = 0

    list.map((item)=>{
        counter++
        grade += item.grade * item.weighted
        
    })

    return `A média ponderada é: ${(grade / counter).toFixed(2)}`
}



