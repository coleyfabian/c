import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicandoComponentes1Component } from './comunicando-componentes1.component';

describe('ComunicandoComponentes1Component', () => {
  let component: ComunicandoComponentes1Component;
  let fixture: ComponentFixture<ComunicandoComponentes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicandoComponentes1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicandoComponentes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
