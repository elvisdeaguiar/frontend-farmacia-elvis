import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBaseService {

  constructor() { }

  obterUrl(): string {
    return 'http://localhost:52265';
  }
}
