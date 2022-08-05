import { CardDetailsComponent } from './../card-details/card-details.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Flower } from 'src/app/models/flower.model';
import * as moment from "moment";
import {Router} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  authenticated = false;

   @Input() flower!: Flower;

  constructor(private dialog: MatDialog,  private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.authenticated=this.isLoggedIn();
  }

  openFlower(selectedFlower?: Flower): void {
    const dialogRef = this.dialog.open(CardDetailsComponent, {
      data: { selectedFlower },
      disableClose: true,
      maxHeight: '80vh',
      minHeight: 350,
      minWidth: 200,
      autoFocus: true,
    });

  }
  public isLoggedIn() {
    if(localStorage.getItem("expires_at")==null){
      return false;
    }
    else {
      console.log("DA");
      // @ts-ignore
      return moment().isBefore(moment(JSON.parse(localStorage.getItem("expires_at"))));
    }
  }

  addToCart(selectedFlower?:Flower):void{
    // @ts-ignore
    this.http.post<any>('http://localhost:3000/basket/addToBasket/'+JSON.parse(localStorage.getItem("user_id"))+'/'+selectedFlower?.flower_id)
      .subscribe((data:any) => {console.log(data)});
  }
}
