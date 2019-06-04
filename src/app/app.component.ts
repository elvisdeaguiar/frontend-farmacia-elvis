import {Component, OnInit} from '@angular/core';
import {ReportsService} from "./reports.service";
import {CategoriaProdutoService} from "./categoria-produto.service";

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

  abreviacaoCategoriaParaExtenso(abreviacao: string): string {
    return this.categoriaProdutoService.abreviacaoCategoriaParaExtenso(abreviacao);
  }

  constructor(private reportsService: ReportsService, private categoriaProdutoService: CategoriaProdutoService) {

  }

  loadReports() {
    this.reportsService.loadReports();

    this.vendasPorPeriodo = this.reportsService.reports.vendasPorPeriodo;
    this.vendasPorCategoria = this.reportsService.reports.vendasPorCategoria;
    this.vendasPorProduto = this.reportsService.reports.vendasPorProduto;
  }
}
