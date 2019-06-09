import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MushroomDialogComponent } from '../mushroom-dialog/mushroom-dialog.component';

@Component({
  selector: 'app-mushroom-classifier',
  templateUrl: './mushroom-classifier.component.html',
  styleUrls: ['./mushroom-classifier.component.scss']
})
export class MushroomClassifierComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MushroomDialogComponent, {
      height: 'auto',
      width: 'auto',
    });
  };

  ngOnInit() {
  }

}

