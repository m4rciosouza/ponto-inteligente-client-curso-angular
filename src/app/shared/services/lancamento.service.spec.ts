import { TestBed, inject } from '@angular/core/testing';

import { LancamentoService } from './lancamento.service';

describe('LancamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LancamentoService]
    });
  });

  it('should be created', inject([LancamentoService], (service: LancamentoService) => {
    expect(service).toBeTruthy();
  }));
});
