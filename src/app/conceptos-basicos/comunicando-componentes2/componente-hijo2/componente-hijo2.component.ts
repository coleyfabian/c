import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo2',
  templateUrl: './componente-hijo2.component.html',
  styleUrls: ['./componente-hijo2.component.css']
})
export class ComponenteHijo2Component implements OnInit {
  valor: string = '';

  @Output() enviar = new EventEmitter<string>();

  constructor() { 
  }
  
  ngOnInit(): void {
  }
  
  enviando() {
    this.enviar.emit(this.valor);
  }
}
