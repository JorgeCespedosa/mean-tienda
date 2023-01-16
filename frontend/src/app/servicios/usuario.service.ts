import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_API = 'http://localhost:4000/usuario'

  usuarioSeleccionado:Usuario={
    email:'',
    password:'',
    _id:'',
  };

  usuarios:Usuario[];

  constructor(private http: HttpClient) {
    this.usuarios = [];

   }

   getUsuarios(){
    return this.http.get<Usuario[]>(this.URL_API);
  }

   createUsuario(usuario:Usuario){
    return this.http.post(this.URL_API,usuario);
  }

  

  getUsuario(email:string, password:string){
    return this.http.get<Usuario[]>(this.URL_API + `/${email} && ${password}`);
  }

  



 

  
}
