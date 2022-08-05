import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Basket } from './../app/models/basket.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {
  }

  getBasket(): Observable<Basket[]> {
    const url = 'http://localhost:3000/shopping-cart';
    return this.http.get<Basket[]>(url);
  }
}
