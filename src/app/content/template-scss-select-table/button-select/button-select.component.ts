import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss']
})
export class ButtonSelectComponent implements OnInit {

  constructor() { }
  btnElevator : any[] =[
    {
       number:1,
       status:true
    },
    {
       number:2,
       status:true
    },
    {
       number:3,
       status:true
    },
    {
       number:4,
       status:true
    },
    {
       number:5,
       status:true
    },
    {
       number:6,
       status:true
    },
    {
       number:7,
       status:true
    },
    {
       number:8,
       status:true
    },
    {
       number:9,
       status:true
    },
    {
       number:10,
       status:true
    },
    {
       number:'G',
       status:true
    }
   
  ]
  ngOnInit(): void {
  }

}
