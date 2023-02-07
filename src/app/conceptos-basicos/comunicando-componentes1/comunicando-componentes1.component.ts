import { Component, OnInit } from '@angular/core';
import { Data } from './data.model';


@Component({
  selector: 'app-comunicando-componentes1',
  templateUrl: './comunicando-componentes1.component.html',
  styleUrls: ['./comunicando-componentes1.component.css']
})
export class ComunicandoComponentes1Component implements OnInit {

  title: string = 'comunicando componentes (@Input)';
  nombre: string = '';

  datas: Data[]=[
    new Data('fabian marcelo aguas coley'),
    new Data('isabel maria coley madera'),
    new Data('stiven andres molina coley'),
    new Data('jose javier aguas coley'),
    new Data('rimigio molina')
  ]

  agregar() {
    this.datas.push(new Data(this.nombre));
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
