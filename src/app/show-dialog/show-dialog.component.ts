import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ShowDialogPopupComponent } from '../content/practice/show-dialog-popup/show-dialog-popup.component';

@Component({
  selector: 'app-show-dialog',
  templateUrl: './show-dialog.component.html',
  styleUrls: ['./show-dialog.component.scss']
})
export class ShowDialogComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog()
  {
    const dialogRef= this.dialog.open(ShowDialogPopupComponent)
  }

}
