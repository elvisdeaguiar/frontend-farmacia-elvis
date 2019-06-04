import {Component, OnInit} from '@angular/core';
import {ReportsService} from "./reports.service";
import {CategoriaProdutoService} from "./categoria-produto.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vendasPorPeriodo: Array<any>;

  vendasPorCategoria: Array<any>;

  vendasPorProduto: Array<any>;

  ngOnInit() {
    this.loadReports();
  }

  abreviacaoCategoriaParaExtenso(abreviacao: string): string {
    return this.categoriaProdutoService.abreviacaoCategoriaParaExtenso(abreviacao);
  }

  constructor(private reportsService: ReportsService, private categoriaProdutoService: CategoriaProdutoService) {
    
  }

  loadReports() {
    this.reportsService.getReports().subscribe((data: any) => {
      let report: any = { ...data };

      this.vendasPorPeriodo = report.vendasPorPeriodo;
      this.vendasPorCategoria = report.vendasPorCategoria;
      this.vendasPorProduto = report.vendasPorProduto;
    });
  }
}
