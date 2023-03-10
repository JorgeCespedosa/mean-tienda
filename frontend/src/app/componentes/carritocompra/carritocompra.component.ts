import { Component, OnInit,Input} from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CarritoService } from 'src/app/servicios/carrito.service';


@Component({
  selector: 'app-carritocompra',
  templateUrl: './carritocompra.component.html',
  styleUrls: ['./carritocompra.component.css']
})
export class CarritocompraComponent implements OnInit {
  @Input() carrito;
  @Input() cant;
  preciototal:number;
  car:Carrito = {
    idUsuario:'',
    producto:[],
    total:0,
    _id:'',
  };

  token:any

  

  constructor(public productoService: ProductoService,public carritoService: CarritoService) {
    this.preciototal = 0;
    
    

    
   }
   

  ngOnInit(): void {
    
   
  }
  
  eliminar(id:any){
    this.productoService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.productoService.getProductos();
      },
      err => console.error(err)
    );
  }
  sumar(){
    this.preciototal = 0;
    
    
    for (let index of this.carrito) {
        this.preciototal += index.precio *index.cantidad;
        
  }
}

getCarrito(){ 
  this.carritoService.getCarritos().subscribe(
    res => {
      this.carritoService.carritos = res
      console.log(res)
    },
    err => console.error(err)
  );
}

//metodo para añadir los datos del carrito a un array, el nombre y la cantidad son dos arrays diferentes
  addCarrito(){
    this.token = localStorage.getItem('token');
    this.carritoService.carritoSeleccionado.idUsuario = this.token;
    this.carritoService.carritoSeleccionado.producto = this.carrito;
    this.carritoService.carritoSeleccionado.total = this.preciototal;
    this.carritoService.postCarrito(this.carritoService.carritoSeleccionado).subscribe(
      res => {
        console.log(res);
        this.getCarrito();
      }
    );
      
  }
  




  vaciar(){
    this.carrito = [];
    this.preciototal = 0;
  }
 

}
