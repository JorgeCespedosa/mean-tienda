import { Component, OnInit, SimpleChange } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-listadocompras',
  templateUrl: './listadocompras.component.html',
  styleUrls: ['./listadocompras.component.css']
})
export class ListadocomprasComponent implements OnInit {

  carritomostrado:any = [];


  

  constructor(public carritoService: CarritoService, public productoService: ProductoService) {
  }

  ngOnInit(): void {
   
    this.getCarrito();
  }

  ngOnChanges(changes: SimpleChange): void {
   
    
  }
  //metodo para mostrar los datos del carrito y filtrado
  getCarrito(){
    this.carritoService.getCarritos().subscribe(
      res => {
        let productosmostrar: Object[] = [];
        
        this.carritoService.carritos = res;
        for (let i of this.carritoService.carritos) {
          if (i['idUsuario'] === localStorage.getItem('token')) {
            productosmostrar.push(i);
            console.log("Llegue")
          }
        }
        this.carritomostrado = productosmostrar;
        
        console.log(this.carritomostrado)
      },
      err => console.error(err)
    );

     
  }

 /* filtrar() {
    let productosmostrar: Object[] = [];
    for (let i of this.carritoService.carritos) {
      if (i['idUsuario'] === localStorage.getItem('token')) {
        productosmostrar.push(i);
        console.log("Llegue")
      }
    }
    this.carritomostrado = productosmostrar;
  }*/


  
  
   


}
