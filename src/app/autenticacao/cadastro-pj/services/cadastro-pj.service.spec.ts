import { TestBed, inject } from '@angular/core/testing';

import { CadastroPjService } from './cadastro-pj.service';

describe('CadastroPjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroPjService]
    });
  });

  it('should be created', inject([CadastroPjService], (service: CadastroPjService) => {
    expect(service).toBeTruthy();
  }));
});
