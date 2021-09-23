import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  //Variables
  public usuario: string = '';
  public usuarioLogueado: boolean = false;

  //Input Output
  @Output() clickQuienSoy = new EventEmitter<boolean>(); 
  @Output() clickJuegos = new EventEmitter<boolean>(); 
  @Output() clickChat = new EventEmitter<boolean>(); 
  //Constructor
  constructor(private userService: UsuarioService) { }
  //Metodos
  ngOnInit(): void {
    if(this.userService.nombre){
      this.usuarioLogueado = true;
      this.usuario = this.userService.nombre;
    }
  }

  cambiarEstadoQuienSoy(){
    this.clickQuienSoy.emit(true);
  }

  cambiarEstadoJuegos(){
    this.clickJuegos.emit(true);
  }

  cambiarEstadoChat(){
    this.clickChat.emit(true);
  }

}
