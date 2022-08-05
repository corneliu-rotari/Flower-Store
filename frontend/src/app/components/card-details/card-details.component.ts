import { Flower } from 'src/app/models/flower.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() flower?: Flower;
  @Output() close = new EventEmitter();
  isDarkMode = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { selectedFlower?: Flower },
    private dialogRef: MatDialogRef<CardDetailsComponent>
  ) {
    this.flower = data.selectedFlower;
  }

  ngOnInit(): void { }

  onClose(): void {
    this.dialogRef.close();
  }

  switchDialogTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }


}
