import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-practica-dos',
  templateUrl: './practica-dos.component.html',
  styleUrls: ['./practica-dos.component.css']
})
export class PracticaDosComponent implements OnInit {

  title: string = 'Practicas II';
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;

  empleados: Empleado[]=[
    new Empleado('Fabian Marcelo', 'Aguas Coley', 'Programador Frotend Junior', 1500),
    new Empleado('Andres', 'Rodriguez', 'Lider tecnico', 1500),
    new Empleado('Carlos', 'sin apellido', 'traductor', 3500),
    new Empleado('ivan', 'toloza', 'lider tecnico', 4000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  agregarEmpleado() {
    let nuevoEmpleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleados.push(nuevoEmpleado);
  }

}
