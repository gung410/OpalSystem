import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-scss-select-table',
  templateUrl: './template-scss-select-table.component.html',
  styleUrls: ['./template-scss-select-table.component.scss']
})
export class TemplateScssSelectTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  new(event)
  {
 console.log(event)
  }
  getOutPut(event)
  {
    console.log('getOutPut')
    console.log(event)

  }
}
