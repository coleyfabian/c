import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgifComponent } from './directiva-ngif.component';

describe('DirectivaNgifComponent', () => {
  let component: DirectivaNgifComponent;
  let fixture: ComponentFixture<DirectivaNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
