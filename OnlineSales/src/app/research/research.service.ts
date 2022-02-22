import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http: HttpClient) { }

  getProducts(parametres: string): Observable<any> {
    let url: string = "http://localhost:8888/Products/" + parametres;
    return this.http.get(url);
  }

  getProductById(id: string): Observable<any> {
    let url: string = "http://localhost:8888/Product/id=" + id;
    return this.http.get(url);
  }

}
