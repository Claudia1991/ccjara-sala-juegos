import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables
  public estadoQuienSoy:boolean = false;
  public estadoJuegos:boolean = false;
  public estadoChat:boolean = false;
  //Constructor
  constructor() { }
  //Metodos
  ngOnInit(): void {
  }
  CambiarVisibilidadQuienSoy(visibilidadQuienSoy: any){
    this.estadoQuienSoy = visibilidadQuienSoy;
  }

}
