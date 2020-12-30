import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-map-filter-reduce',
  templateUrl: './test-map-filter-reduce.component.html',
  styleUrls: ['./test-map-filter-reduce.component.scss']
})
export class TestMapFilterReduceComponent implements OnInit {

  boxEmpty : any[] ;
  box : any[]=[
    {
      num: 1 ,
      name:'hung'
    },
    {
      num: 2 ,
      name:'hung'
    },
    {
      num: 3 ,
      name:'hung'
    },
    {
      num: 4 ,
      name:'hung'
    },
  ]
  
  constructor() { }
  pushToBoxEmpty()
  {
    console.log("item")
    let boxEmpty = this.box.map( 
     (item, index  , box )=>
     {
       
     return  item;
   }
   )
   this.boxEmpty = boxEmpty
   console.log(boxEmpty)

  }
  ngOnInit(): void {
    console.log("ngOnInit")
    this.pushToBoxEmpty();
  }

}
