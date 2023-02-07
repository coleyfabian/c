import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.css']
})
export class NgClassStyleComponent implements OnInit {
  title: string = 'Directiva NgStyle y NgClass';
  texto: string = '';

  ng: any = {
    estilo: false,
    clase: false
  }

  apagar() {
    this.ng.estilo = false;
    this.ng.clase = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
