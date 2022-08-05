import { FlowerService } from 'src/services/flower.service';
import { Flower } from './../../models/flower.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  flowerList: Flower[] = [];
  selectedFlower : Flower | undefined;
  displayDetails = false;

  subscription: Subscription;


  constructor(private flowerService: FlowerService) {
    console.log("merge");
    this.subscription = this.flowerService.getFlowers().subscribe(flowers => {
      this.flowerList = flowers;
      console.log(flowers);
    });
  }

  openDetails(flower: Flower): void {
    this.selectedFlower = flower;
    this.displayDetails = true;
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
