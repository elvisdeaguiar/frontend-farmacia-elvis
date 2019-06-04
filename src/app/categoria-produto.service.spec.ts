import { TestBed } from '@angular/core/testing';

import { CategoriaProdutoService } from './categoria-produto.service';

describe('CategoriaProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaProdutoService = TestBed.get(CategoriaProdutoService);
    expect(service).toBeTruthy();
  });
});
