import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email:string;
  password:string;
 

  constructor(public usuarioService: UsuarioService,public router:Router) {
    this.email = '';
    this.password = '';
    
   }

  ngOnInit(): void {
  }

  addUsuario(form: NgForm){
    this.usuarioService.createUsuario(form.value).subscribe(
      res =>{
        alert('Usuario creado correctamente');
        this.router.navigate(['/login']);
      
      },
      err =>console.log(err)
    )
  }


  

}
