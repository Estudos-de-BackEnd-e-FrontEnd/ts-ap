import { User } from "./types"

export function checkUser(user: User): string{
    const {name, age, occupation, salary} = user
    return `${name}, ${age} anos, ${occupation}, salário ${salary ? `R$ ${salary}` : "N/A"}`
   
}




