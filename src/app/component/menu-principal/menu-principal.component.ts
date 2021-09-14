import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  public usuario: string = '';
  public usuarioLogueado: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}