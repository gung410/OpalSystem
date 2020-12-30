import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { listCheckUser } from 'src/app/Shared/checkboxList';
import { listCheck } from 'src/app/Shared/listCheck.model';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-create-filter-dialog',
  templateUrl: './create-filter-dialog.component.html',
  styleUrls: ['./create-filter-dialog.component.scss']
})
export class CreateFilterDialogComponent implements OnInit {

  checkBoxList : listCheck[] = listCheckUser
  constructor(
    private  matDialog:MatDialog
  ) { 

  }

  ngOnInit(

  ): void {
  }
  openDialogFilter()
  {
    const openDialog = this.matDialog.open(FilterDialogComponent,{
      width:'20px',
      
    });


  }
}
