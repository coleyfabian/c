import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  subHeader = 'Interpolacion';
  nombre='Fabian Marcelo';
  apellido='Aguas Coley';
  private edad=26;
  empresa='Codigo Fuente';

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(){
    return this.edad;
  }

}
