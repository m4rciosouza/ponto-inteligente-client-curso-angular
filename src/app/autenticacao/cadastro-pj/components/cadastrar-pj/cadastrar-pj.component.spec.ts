import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPjComponent } from './cadastrar-pj.component';

describe('CadastrarPjComponent', () => {
  let component: CadastrarPjComponent;
  let fixture: ComponentFixture<CadastrarPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
