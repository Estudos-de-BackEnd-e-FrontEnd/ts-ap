import { averageCalc } from "./ex-1-average";
import { weightedAverageCalc} from "./ex-2-weightedAverage";
import { walletManager} from "./ex-3-wallet";
import { addProduct, listProduct, deleteProduct} from "./ex-4-crud";
import { checkUser } from "./ex-5-user";
import { checkDirector } from "./ex-6-director";
import { checkStaff} from "./ex-7-staffs";
//exercicio 1
console.log(averageCalc(10,5))
console.log("----------------------------------------------------------------")
//exercicio 2
const averageList = [
    {grade: 10, weighted: 2},
    {grade: 5, weighted: 3},
    {grade: 8, weighted: 4},
]

console.log(weightedAverageCalc(averageList))
console.log("----------------------------------------------------------------")

//exercicio 3
console.log(walletManager({type: "in", value: 6000}))
console.log(walletManager({type: "in", value: 6000}))
console.log(walletManager({type: "out", value: 4000}))
console.log("----------------------------------------------------------------")

//exercicio 4
console.log("adiciona o produto", addProduct("abacate", 10))
console.log("deleta o produto", deleteProduct("abacate"))
console.log(listProduct())
console.log("----------------------------------------------------------------")
//exercicio 5
console.log(checkUser({name: "lucas", age: 27, occupation: "dev front"}))
console.log(checkUser({name: "nami", age: 35, occupation: "dev back", salary: 5000}))
console.log("----------------------------------------------------------------")
//exercicio 6
console.log(checkDirector({name: "maria", age: 50, commission: 3, salary: 1000}))
console.log(checkDirector({name: "mario", age: 50, commission: 3}))
console.log("----------------------------------------------------------------")
//exercicio 7
console.log(checkStaff({name: "matias", age: 27, commission: 1}))
console.log(checkStaff({name: "marcio", age: 27, occupation: "dev back"}))