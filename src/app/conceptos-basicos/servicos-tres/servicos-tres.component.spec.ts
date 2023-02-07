import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosTresComponent } from './servicos-tres.component';

describe('ServicosTresComponent', () => {
  let component: ServicosTresComponent;
  let fixture: ComponentFixture<ServicosTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
