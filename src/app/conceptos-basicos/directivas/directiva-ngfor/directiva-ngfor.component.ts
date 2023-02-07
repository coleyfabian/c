import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngfor',
  templateUrl: './directiva-ngfor.component.html',
  styleUrls: ['./directiva-ngfor.component.css']
})
export class DirectivaNgforComponent implements OnInit {
  title: string = "Directiva angular ngFor";
  entradas: any[];

  constructor() { 
    this.entradas = [
      {titulo: 'Estoy enamorado de mari'},
      {titulo: 'Sera mi esposa'},
      {titulo: 'la quiero mucho'},
      {titulo: 'es gruñona'},
      {titulo: 'pero asi la quiero y la adoro'},
    ]
  }

  ngOnInit(): void {
  }

}
