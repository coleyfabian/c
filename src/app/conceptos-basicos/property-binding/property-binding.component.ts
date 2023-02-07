import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  title = 'Property-binding';
  enabletxt: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  enable() {
    this.enabletxt==false ? this.enabletxt = true : this.enabletxt = false;
  }

}
