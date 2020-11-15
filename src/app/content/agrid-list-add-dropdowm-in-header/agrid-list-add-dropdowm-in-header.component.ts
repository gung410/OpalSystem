import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ColDef, ColDefUtil } from 'ag-grid-community';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-agrid-list-add-dropdowm-in-header',
  templateUrl: './agrid-list-add-dropdowm-in-header.component.html',
  styleUrls: ['./agrid-list-add-dropdowm-in-header.component.scss']
})
export class AgridListAddDropdowmInHeaderComponent implements OnInit {

  coldefs:ColDef;
  constructor() { }
  columnDefs = [
    { 
    field: 'make',
    editable:true ,
    // cellEditor: 'agSelectCellEditor',
    // cellEditorParams: {
    //   values: ['Porsche', 'Toyota', 'Ford', 'AAA', 'BBB', 'CCC'],
    // },
    // headerComponentParams:{
     
    //   // template:
    // }

    
    
  },
  
    { 
      field: 'model',
    
  },
    { field: 'price'},
    { field: 'money'},
    { field: 'hurt'}
];
rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  ngOnInit(): void {
  }

}
