import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private RESPOSTA_PADRAO = {
    vendasPorPeriodo: [],
    vendasPorCategoria: [],
    vendasPorProduto: []
  };

  constructor(private httpClient : HttpClient) {

  }

  reports: any = this.RESPOSTA_PADRAO;

  loadReports() {
    //this.httpClient.get('http://localhost:52265/api/Reports').subscribe(resposta => this.reports = resposta || this.RESPOSTA_PADRAO);

    let vendasPorPeriodo = [
      {
        'ano': 2019,
        'mes': 6,
        'valorVendido': 185.88
      }
    ];

    let vendasPorCategoria = [
      {
        'categoria': 'M',
        'valorVendido': 20.22
      },
      {
        'categoria': 'NM',
        'valorVendido': 82.80
      },
      {
        'categoria': 'NMA',
        'valorVendido': 82.86
      }
    ];

    let vendasPorProduto = [
      {
        'codigoProduto': 2,
        'quantidade': 4
      },
      {
        'codigoProduto': 1,
        'quantidade': 2
      },
      {
        'codigoProduto': 3,
        'quantidade': 1
      }
    ];

    let reports = {
      vendasPorPeriodo: vendasPorPeriodo,
      vendasPorCategoria: vendasPorCategoria,
      vendasPorProduto: vendasPorProduto
    };

    this.reports = reports;
  }
}
