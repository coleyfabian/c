import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosUnoComponent } from './servicios-uno.component';

describe('ServiciosUnoComponent', () => {
  let component: ServiciosUnoComponent;
  let fixture: ComponentFixture<ServiciosUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
