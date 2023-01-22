import { Producto } from "./producto"

export interface Carrito{
    idUsuario:string
    producto: Producto[]
    total:number
    createdAt?: string
    updateAt?: string
    _id?: string
}