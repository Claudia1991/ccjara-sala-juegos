import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  public colorActual: string = '';
  constructor() {
    this.colorActual = 'celeste';
   }

  cambiarColorAdministrador(){
    this.colorActual = 'transparente';
  }

  cambioColorAdmin(value:any){
    this.colorActual = value;
  }

  ngOnInit(): void {
  }

}
