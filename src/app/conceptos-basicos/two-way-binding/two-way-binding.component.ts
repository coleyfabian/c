import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  title: string = 'Two way binding - binding bidireccinal';
  nombre: string = 'ingresa tu nombre';

  constructor() { }

  ngOnInit(): void {
  }

}
