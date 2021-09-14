import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() colorRecibido:string = '';
  @Output() eventoCambieColor: EventEmitter<any> = new EventEmitter<any>();
  public color: string ='';

  constructor() {
    this.color = 'rojo';
    this.colorRecibido = 'violeta';
   }

   cambiarColor(){
     this.color = 'azul';
      //this.colorRecibido = 'magenta'; no por que pierdo la referencia del imput, el padre se debe encargar de cambiarla de ser necesario!!!
      this.eventoCambieColor.emit(this.color);
   }

  ngOnInit(): void {
  }

}
