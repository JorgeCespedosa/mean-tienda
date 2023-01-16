import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API = 'http://localhost:4000/api'

  productoSeleccionado:Producto={
    foto:'',
    nombre:'',
    descripcion:'',
    categoria:'',
    precio:0,
    cantidad:1,
    stock:10,
    _id:''
  };

  productos: Producto[];
 


  constructor(private http: HttpClient){
    this.productos = [];
    
  }

  getProductos(){
    return this.http.get<Producto[]>(this.URL_API);
  }

  createProducto(producto:Producto){
    return this.http.post(this.URL_API,producto);
  }

  updateProducto(producto:Producto){
    return this.http.put(`${this.URL_API}/${producto._id}`,producto);
  }

  deleteProducto(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
 
}
