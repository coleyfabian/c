import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})

export class ComponenteHijoComponent implements OnInit {

  @Input() nombreLista: any;

  constructor() { }

  ngOnInit(): void {
  }

}
