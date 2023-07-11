type TransactionsType = "in" | "out"

export interface Wallet{
    balance: number,
    transactions: Transaction[]
}

export interface Transaction{
    type: TransactionsType,
    value: number
}


export interface Average{
    averageResult: number;
    status: StatusOptions;
}

type StatusOptions = "APROVADO" | "REPROVADO"


export interface AverageWeighted{
    grade: number,
    weighted: number,
}


export interface Product{
    name: string,
    value: number
}


export interface User{
    name: string,
    age: number,
    occupation?: string,
    salary?: number
}

type CommissionType = 1 | 2 | 3

export type Director = User & {commission?: CommissionType}

export type StaffTypes = User | Director