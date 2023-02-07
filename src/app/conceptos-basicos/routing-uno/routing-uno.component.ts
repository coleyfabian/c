import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-uno',
  templateUrl: './routing-uno.component.html',
  styleUrls: ['./routing-uno.component.css']
})
export class RoutingUnoComponent implements OnInit {
  title: string = 'Routing bases';
  // rutas: any = {};
  rutas: string = '';
  ruta: string = '';
  
  constructor() { }

  ngOnInit(): void {

    // this.rutas = {
    //   inicio: '',
    //   otro: '/otro'
    // }
  }

}
