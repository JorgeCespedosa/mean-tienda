import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  token ='';


  constructor(public usuarioService: UsuarioService,public router:Router) { }

  ngOnInit(): void {
  }

  
  login(form: NgForm){
    if(form.valid){
      this.usuarioService.getUsuario(this.email, this.password).subscribe(
        res => {
          for(this.usuarioService.usuarioSeleccionado of res){
            if(this.usuarioService.usuarioSeleccionado.email == this.email && this.usuarioService.usuarioSeleccionado.password == this.password){
              console.log("Usuario encontrado");
              console.log(this.usuarioService.usuarioSeleccionado);
              localStorage.setItem('token',  JSON.stringify(this.usuarioService.usuarioSeleccionado._id));
              localStorage.setItem('user',  JSON.stringify(this.usuarioService.usuarioSeleccionado.email));
              this.router.navigate(['/stock']);

            }else{
              console.log("Usuario no encontrado");
              console.log(this.usuarioService.usuarioSeleccionado);
            }

        }
        },
        err => console.log(err)
      );
    }
  }
 
  
}

//



