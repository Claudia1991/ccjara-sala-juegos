import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { LogServiceService } from '../../services/log-service.service';
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
  public mostrarSpinner:boolean = false;

  //Constructor
  constructor(private rutas : Router, private userService: UsuarioService, private logService: LogServiceService) {
   }

   // Methods
  ngOnInit(): void {
  }

  IngresarAccesoRapido(){
    this.mostrarSpinner = true;
    this.userLogin.email= 'acceso.rapido@test.com';
    this.userLogin.password='test1234';
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.userLogin.email, this.userLogin.password)
    .then((userCredential) => {
      this.userService.nombre = this.userLogin.email;
      this.logService.RegistrarIngresoUsuario(this.userLogin.email, new Date());
      const user = userCredential.user;
      console.log(user);
      this.rutas.navigate(['home']);

    })
    .catch((error) => {
      this.error = true;
      this.mensajeError = 'Error en las credenciales.';
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorCode, errorMessage);
    })
    .finally(()=>{
      this.mostrarSpinner = false;
    });
  }

  Registrar(){
    this.mostrarSpinner = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.userLogin.email, this.userLogin.password)
    .then((userCredential) => {
      //TODO manejar token para guardar nombre en el service de usuario
      //TODO agregar spinner
      const user = userCredential.user;
      this.userService.nombre = this.userLogin.email;
      console.log(user);
      this.rutas.navigate(['home']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode == 'auth/email-already-in-use'){
        this.error = true;
        this.mensajeError = 'Email ya en uso.';
      }
      console.log("Error:", errorCode, errorMessage);
    })
    .finally(()=>{
      this.mostrarSpinner = false;
    });
  }

  Ingresar(){
    this.mostrarSpinner = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.userLogin.email, this.userLogin.password)
    .then((userCredential) => {
      this.userService.nombre = this.userLogin.email;
      this.logService.RegistrarIngresoUsuario(this.userLogin.email, new Date());
      const user = userCredential.user;
      console.log(user);
      this.rutas.navigate(['home']);

    })
    .catch((error) => {
      this.error = true;
      this.mensajeError = 'Error en las credenciales.';
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorCode, errorMessage);
    })
    .finally(()=>{
      this.mostrarSpinner = false;
    });
  }
}


