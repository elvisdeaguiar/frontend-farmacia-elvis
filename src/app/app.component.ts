import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vendasPorPeriodo: Array<any> = [];

  vendasPorCategoria: Array<any> = [];

  vendasPorProduto: Array<any> = [];

  ngOnInit() {
    this.loadReports();
  }

  loadReports() {
    this.vendasPorPeriodo = [
        {
          'ano': 2019,
          'mes': 6,
          'valorVendido': 185.88
        }
    ];

    this.vendasPorCategoria = [
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

    this.vendasPorProduto = [
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
  }
}
