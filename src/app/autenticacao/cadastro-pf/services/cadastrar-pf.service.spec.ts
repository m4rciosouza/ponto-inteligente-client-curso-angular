import { TestBed, inject } from '@angular/core/testing';

import { CadastrarPfService } from './cadastrar-pf.service';

describe('CadastrarPfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrarPfService]
    });
  });

  it('should be created', inject([CadastrarPfService], (service: CadastrarPfService) => {
    expect(service).toBeTruthy();
  }));
});
