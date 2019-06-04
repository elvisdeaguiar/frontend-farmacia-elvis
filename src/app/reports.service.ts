import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlBaseService} from "./url-base.service";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private httpClient : HttpClient, private urlBaseService: UrlBaseService) {

  }

  getReports() {
    let url = this.urlBaseService.obterUrl() + '/api/Reports';

    return this.httpClient.get(url);
  }
}
