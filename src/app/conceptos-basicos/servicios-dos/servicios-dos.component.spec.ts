import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDosComponent } from './servicios-dos.component';

describe('ServiciosDosComponent', () => {
  let component: ServiciosDosComponent;
  let fixture: ComponentFixture<ServiciosDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
