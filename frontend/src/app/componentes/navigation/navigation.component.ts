import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() filtrar = new EventEmitter();

  search:any;
  tok:any;
  email:any;
  constructor() {
    this.tok = localStorage.getItem('token');
    this.email = localStorage.getItem('user');
   }

  ngOnInit(): void {
  }

   sendFiltrar(categoria:any){
     this.filtrar.emit(categoria);
   }

}
