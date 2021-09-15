import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  public usuario: string = '';
  public usuarioLogueado: boolean = false;
  
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    if(this.userService.nombre){
      this.usuarioLogueado = true;
      this.usuario = this.userService.nombre;
    }
  }

}
