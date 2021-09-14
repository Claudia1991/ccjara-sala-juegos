import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import UserLogin from '../../models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables
  public userLogin: UserLogin = new UserLogin();
  public error: boolean = false;
  public mensajeError: string = '';

  //Constructor
  constructor(private rutas : Router, private service: UsuarioService) {
   }

   // Methods
  ngOnInit(): void {
  }

  Registrar(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.userLogin.email, this.userLogin.password)
    .then((userCredential) => {
      //TODO manejar token para guardar nombre en el service de usuario
      //TODO agregar spinner
      const user = userCredential.user;
      console.log(user);
      this.rutas.navigate(['home']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorCode, errorMessage);
    });
  }

  Ingresar(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.userLogin.email, this.userLogin.password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user);
      this.rutas.navigate(['home']);

    })
    .catch((error) => {
      this.error = true;
      const errorCode = error.code;
      const errorMessage = error.message;
      this.mensajeError = 'Error en las credenciales.';
      console.log("Error:", errorCode, errorMessage);
    });
  }
}


