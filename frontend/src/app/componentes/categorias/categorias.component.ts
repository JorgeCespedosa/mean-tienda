import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Output() category = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  enviarCategoria(nombre:any) {
    this.category.emit(nombre);
  }

}
