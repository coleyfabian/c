import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  title: string = 'Event Binding';
  view: boolean = false;

  @ViewChild('asDiv') prueba: ElementRef | undefined; 

  constructor() {}

  ngOnInit(): void {
  }

  activeAlert(){
    this.view = true;
  }

  @HostListener('document: click',['$event.target'])
  clickOut($event: HTMLElement){
    $event.id !== 'iamboton' ? this.view = false : this.view = true;
  }
}