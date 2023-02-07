import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingUnoComponent } from './routing-uno.component';

describe('RoutingUnoComponent', () => {
  let component: RoutingUnoComponent;
  let fixture: ComponentFixture<RoutingUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
