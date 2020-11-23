import { Component, OnInit } from '@angular/core';
import { elevator } from './elevator.model';

@Component({
  selector: 'app-elevator-system',
  templateUrl: './elevator-system.component.html',
  styleUrls: ['./elevator-system.component.scss']
})

export class ElevatorSystemComponent implements OnInit {

  list: any[] = []
  constructor() { }
  numberElevatorOne: any[] = [
    {
      floor: 10,
      status: false
    },
    {
      floor: 9,
      status: false
    },
    {
      floor: 8,
      status: false
    },
    {
      floor: 7,
      status: false
    },
    {
      floor: 6,
      status: false
    },
    {
      floor: 5,
      status: false
    },
    {
      floor: 4,
      status: false
    },
    {
      floor: 3,
      status: false
    },
    {
      floor: 2,
      status: false
    },
    {
      floor: 1,
      status: false
    },
    {
      floor: 'G',
      status: false
    },
  ];
  numberElevatorTwo: any[] = [
    {
      floor: 10,
      status: false
    },
    {
      floor: 9,
      status: false
    },
    {
      floor: 8,
      status: false
    },
    {
      floor: 7,
      status: false
    },
    {
      floor: 6,
      status: false
    },
    {
      floor: 5,
      status: false
    },
    {
      floor: 4,
      status: false
    },
    {
      floor: 3,
      status: false
    },
    {
      floor: 2,
      status: false
    },
    {
      floor: 1,
      status: false
    },
    {
      floor: 'G',
      status: false
    },
  ];

  ngOnInit(): void {
    const stopStage = 4;
    this.list = this.numberElevatorTwo;

    for (let i = 0; i < stopStage; i++) {


      setTimeout(
        () => {
          this.list[i].status = true;
          if (i !== 0 || i) {
            this.list[i - 1].status = false;
          }
        }, 1000 * (i + 1)
      );
    }



    // this.list.forEach((stage, index) => {
    //   setTimeout(
    //     () => {
    //       stage.status = true;
    //       this.list.push(stage);
    //     }, 1000 * (index + 1)
    //   )
    // });
    //  this.selectFloor()
  }

  // selectFloor()
  // {
  // for(let i = 0 ; i< this.list.length ; i++)
  // {

  //   this.list.find(
  //      (x:elevator)=>
  //      {


  //   setTimeout(
  //      () =>{
  //      x.status=true
  //       // if(x.floor !=3)
  //       // {
  //       //   x.status =false
  //       // }
  //      },1000*(i+1)
  //    );

  //      }

  //   );


  // }


  // }


}
