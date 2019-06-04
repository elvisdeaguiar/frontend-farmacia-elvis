import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProdutoService {

  constructor() { }

  abreviacaoCategoriaParaExtenso(abreviacao: string): string {
    switch (abreviacao) {
      case 'M':
        return 'Medicamento';
      case 'NM':
        return 'Não-medicamento';
      case 'NMA':
        return 'Não-medicamento alimento';
      default:
        return abreviacao;
    }
  }
}
