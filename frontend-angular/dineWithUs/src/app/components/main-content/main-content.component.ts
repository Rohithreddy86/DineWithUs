import { Component, OnInit } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  videocards1 :Videocard[];

  constructor() { }

  ngOnInit(): void {
    this.videocards1 = VIDEOCARDS;
  }
  testfn()
  {
    console.log(VIDEOCARDS);
    console.log("hai");
  }
  GoTo(num)
  {
    console.log("clicked");
    console.log(num);
    window.location.href= this.videocards1.find(o => o.cardID === num).ytLink;
  }
}
