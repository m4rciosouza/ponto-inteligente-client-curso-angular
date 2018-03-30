import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoComponent } from './atualizacao.component';

describe('AtualizacaoComponent', () => {
  let component: AtualizacaoComponent;
  let fixture: ComponentFixture<AtualizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
