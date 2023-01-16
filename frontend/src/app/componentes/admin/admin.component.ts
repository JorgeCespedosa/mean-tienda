import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  resetFormulario(form: NgForm){
    form.reset();
  }

  getProductos(){
    this.productoService.getProductos().subscribe(
      res => {
        this.productoService.productos = res
      },
      err => console.error(err)
      
    )
  }

  addProducto(form: NgForm){
    if(form.value._id){
      this.productoService.updateProducto(form.value).subscribe(
       res => console.log('Actualizado'),
       err => console.log(err)
      )
    }else{
      this.productoService.createProducto(form.value).subscribe(
        res =>{
          this.getProductos();
          form.reset();
        },
        err =>console.log(err)
      )
    }
  }

  deleteProducto(id:any){
    if(confirm('Estas seguro de querer eliminarlo?')){
      this.productoService.deleteProducto(id).subscribe(
        res=>{
          this.getProductos();
        },
        err =>console.log(err)
      )
    }
   
  }

  editProducto(producto:Producto){
    this.productoService.productoSeleccionado = producto;
  }

}
