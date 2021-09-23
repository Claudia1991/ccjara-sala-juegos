import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  //Variables
  @Output() cambiarEstadoQuienSoy: EventEmitter<boolean> = new EventEmitter<boolean>();
  //Constructro
  constructor() { }
  //Metodos
  ngOnInit(): void {
  }

  volver(){
    this.cambiarEstadoQuienSoy.emit(false);
  }

}
