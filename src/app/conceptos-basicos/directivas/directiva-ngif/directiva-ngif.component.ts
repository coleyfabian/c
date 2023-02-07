import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngif',
  templateUrl: './directiva-ngif.component.html',
  styleUrls: ['./directiva-ngif.component.css']
})
export class DirectivaNgifComponent implements OnInit {

  title: string = 'Directiva angular ngIf';
  nombre: string = '';
  apellido: string = '';
  mensaje: string = 'sin nuevos usuarios';
  viewUser: boolean = false;
  longitudName: number = this.nombre.length;
  longitudApellido: number = this.apellido.length;

  constructor() { }

  ngOnInit(): void {
  }

  registeredUser() {
    this.mensaje = 'el nuevo usario es';
    this.viewUser = true;
  }  
}
