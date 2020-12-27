import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Shared/message.service';

@Component({
  selector: 'app-hero-message',
  templateUrl: './hero-message.component.html',
  styleUrls: ['./hero-message.component.scss']
})
export class HeroMessageComponent implements OnInit {

  constructor(
    public messageService : MessageService
  ) { }

  ngOnInit(): void {
  }

}
