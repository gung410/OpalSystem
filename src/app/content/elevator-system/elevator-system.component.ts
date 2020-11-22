import { Component, OnInit } from '@angular/core';
import { elevator } from './elevator.model';

@Component({
  selector: 'app-elevator-system',
  templateUrl: './elevator-system.component.html',
  styleUrls: ['./elevator-system.component.scss']
})

export class ElevatorSystemComponent implements OnInit {

  list:any[]=[]
  constructor() { }
  numberElevatorOne:any[]=[
    {
      floor:10,
      status:false
    },
    {
      floor:9,
      status:false
    },
    {
      floor:8,
      status:false
    },
    {
      floor:7,
      status:false
    },
    {
      floor:6,
      status:false
    },
    {
      floor:5,
      status:false
    },
    {
      floor:4,
      status:false
    },
    {
      floor:3,
      status:false
    },
    {
      floor:2,
      status:false
    },
    {
      floor:1,
      status:false
    },
    {
      floor:'G',
      status:false
    },
    ] ;
  numberElevatorTwo:any[]=[
    {
      floor:10,
      status:false
    },
    {
      floor:9,
      status:false
    },
    {
      floor:8,
      status:false
    },
    {
      floor:7,
      status:false
    },
    {
      floor:6,
      status:false
    },
    {
      floor:5,
      status:false
    },
    {
      floor:4,
      status:false
    },
    {
      floor:3,
      status:false
    },
    {
      floor:2,
      status:false
    },
    {
      floor:1,
      status:false
    },
    {
      floor:'G',
      status:false
    },
  ] ;

  ngOnInit(): void {
   for(let i = 0 ; i < this.numberElevatorTwo.length ; i++)
   {

    this.list.push(this.numberElevatorTwo[i])

    // setTimeout(
    //    () =>{
    //    },1000*(i+1)
    //  );
   }
   this.selectFloor()
  }

  selectFloor()
  {
  for(let i = 0 ; i< this.list.length ; i++)
  {

    this.list.find(
       (x:elevator)=>
       {


    setTimeout(
       () =>{
       x.status=true
        // if(x.floor !=3)
        // {
        //   x.status =false
        // }
       },1000*(i+1)
     );

       }

    );


  }


  }


}
