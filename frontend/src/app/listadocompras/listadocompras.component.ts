import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-listadocompras',
  templateUrl: './listadocompras.component.html',
  styleUrls: ['./listadocompras.component.css']
})
export class ListadocomprasComponent implements OnInit {
  array: any = [];

  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getCarrito();
  }

  //metodo para mostrar los datos del carrito
  getCarrito(){
    this.carritoService.getCarritos().subscribe(
      res => {
        this.carritoService.carritos = res

        console.log(res)
      },
      err => console.error(err)
    );
  }
}
