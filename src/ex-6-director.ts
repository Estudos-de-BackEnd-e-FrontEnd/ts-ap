import {Director} from "./types"

export function checkDirector(director: Director): string{
    const {name, age, commission , salary} = director
    return `Director(a) ${name}, ${age} anos, comissão nível ${commission}, salário ${salary ? `R$ ${salary}` : "N/A"}`
    
}