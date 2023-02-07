import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicando-componentes2',
  templateUrl: './comunicando-componentes2.component.html',
  styleUrls: ['./comunicando-componentes2.component.css']
})
export class ComunicandoComponentes2Component implements OnInit {
  title: string ='Comunicando Componentes (@Output)';
  recibido: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
