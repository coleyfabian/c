import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicandoComponentes2Component } from './comunicando-componentes2.component';

describe('ComunicandoComponentes2Component', () => {
  let component: ComunicandoComponentes2Component;
  let fixture: ComponentFixture<ComunicandoComponentes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicandoComponentes2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicandoComponentes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
