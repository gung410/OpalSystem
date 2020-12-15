import { Component, OnInit } from '@angular/core';
import { ColumnDefs, RowData } from '../columnDefs-surveyjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs :any = ColumnDefs ;
  rowData :any = RowData
}
