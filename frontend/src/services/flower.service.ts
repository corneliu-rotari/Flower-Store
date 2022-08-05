import { Flower } from '../app/models/flower.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  constructor(private http: HttpClient) {
  }

  getFlowers(): Observable<Flower[]> {
    const url = 'http://localhost:3000/store';
    return this.http.get<Flower[]>(url);
  }
}
