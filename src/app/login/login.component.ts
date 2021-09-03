import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas : Router, private service: UsuarioService) { }

  ngOnInit(): void {
  }

  Siguiente(){
    console.log("siguiente")
    alert("Vamos a siguiente")
    //this.rutas.navigate(['home']);
    setTimeout(()=> {
    this.rutas.navigate(['home']);

    }, 2000);
  }
}
