import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgforComponent } from './directiva-ngfor.component';

describe('DirectivaNgforComponent', () => {
  let component: DirectivaNgforComponent;
  let fixture: ComponentFixture<DirectivaNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
