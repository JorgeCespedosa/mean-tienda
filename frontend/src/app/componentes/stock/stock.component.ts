import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  productos:any;
  productosmostrados:any;
  items: Producto[] = [];
  

  constructor(public productoService: ProductoService) { 
    
  }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      res => {
        this.productoService.productos = res
      },
      err => console.error(err)
      
    )
  }

  filtrar(categoria: string) {
    let productosmostrar: Object[] = [];
    for (let i of this.productoService.productos) {
      if (i['categoria'] === categoria) {
        productosmostrar.push(i);
      }
    }
    this.productosmostrados = productosmostrar;
  }

 

  addCar(producto:Producto){
    this.productoService.productoSeleccionado = producto;
   // this.items.push(producto);
   console.log(producto)
    let repetido = false;
    for(let i of this.items){
      if(i.nombre == producto.nombre){
        repetido = true;
        console.log("repetido")
        i.cantidad = i.cantidad+1;
        if(i.cantidad > i.stock){
          alert("No hay stock suficiente");
          i.cantidad = i.cantidad-1;
        }

        

        break;
      }
    }
    if(repetido == false){
      this.items.push(producto);
      
    }

    
  }
}
