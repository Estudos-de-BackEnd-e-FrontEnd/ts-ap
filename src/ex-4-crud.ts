import { Product } from "./types"

const productList: Product[] = [
    {name: "laranja", value:5},
    {name: "maçã", value:10},
    {name: "perâ", value:15},
]

export function addProduct(setName: string, setValue: number):void{
    let newProduct: Product = {
        name: setName,
        value: setValue
    }

    productList.push(newProduct)

}

export function deleteProduct(productName: string):void{
    let index = productList.findIndex((item)=> item.name === productName)
    productList.splice(index, 1)

}

export function listProduct(): Product[]{
    return productList
}

