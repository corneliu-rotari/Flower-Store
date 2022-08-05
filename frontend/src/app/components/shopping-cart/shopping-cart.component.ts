import { Basket } from './../../models/basket.model';
import { ShopService } from './../../../services/shop.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface PeriodicElement {
  flower_name: string;
  basket_id: number;
  quantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {basket_id: 1, flower_name: 'Hydrogen', quantity: 1.0079},
  {basket_id: 2, flower_name: 'Helium', quantity: 4.0026},
  {basket_id: 3, flower_name: 'Lithium', quantity: 6.941},
  {basket_id: 4, flower_name: 'Beryllium', quantity: 9.0122},
  {basket_id: 5, flower_name: 'Boron', quantity: 10.811},
  {basket_id: 6, flower_name: 'Carbon', quantity: 12.0107},
  {basket_id: 7, flower_name: 'Nitrogen', quantity: 14.0067},
  {basket_id: 8, flower_name: 'Oxygen', quantity: 15.9994},
  {basket_id: 9, flower_name: 'Fluorine', quantity: 18.9984},
  {basket_id: 10, flower_name: 'Neon', quantity: 20.1797},
];

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['basket_id', 'flower_name', 'quantity'];

   // dataSource: Basket[] = [];
  dataSource :PeriodicElement[] = [];

  subscription?: Subscription;

  constructor(private shopService: ShopService,    private http: HttpClient) {
    // @ts-ignore
    this.http.get<any>('http://localhost:3000/basket/'+JSON.parse(localStorage.getItem("user_id")))
      .subscribe((data:any) => {
        for(const flower of data )
        {
          this.dataSource.push({basket_id:flower.basket_id,flower_name:flower.flower_name,quantity:flower.quantity})
        }
        console.log(this.dataSource);
      });
  }


  ngOnInit(): void {

  }

}
