import { Wallet, Transaction } from "./types"

let wallet: Wallet = {
    balance:0,
    transactions: []
}

 

export function walletManager (newTransaction: Transaction): string | object{

        if(newTransaction.type === "out"){
            
            if(wallet.balance < newTransaction.value){
           
                return `Não é possivel tirar o valor: ${newTransaction.value}, Saldo insuficiente`
            }

            wallet.transactions.push(newTransaction)
            wallet.balance -= newTransaction.value
            return wallet
                 
        }else{
            wallet.transactions.push(newTransaction)
            wallet.balance += newTransaction.value
            return wallet
        }

}
