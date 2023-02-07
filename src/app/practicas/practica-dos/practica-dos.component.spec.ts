import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaDosComponent } from './practica-dos.component';

describe('PracticaDosComponent', () => {
  let component: PracticaDosComponent;
  let fixture: ComponentFixture<PracticaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
