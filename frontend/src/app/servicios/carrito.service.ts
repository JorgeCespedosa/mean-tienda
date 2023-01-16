import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Carrito } from '../models/carrito';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  URL_API = 'http://localhost:4000/carrito'

  carritoSeleccionado:Carrito={
    idUsuario:'',
    nombreProducto:[],
    cantidad:[],
  };

  carritos: Carrito[];

  constructor(private http: HttpClient) {
    this.carritos = [];
   }

   getCarritos(){
    return this.http.get<Carrito[]>(this.URL_API);  
   }
  postCarrito(carrito:Carrito){
    return this.http.post(this.URL_API,carrito);
  }

}
