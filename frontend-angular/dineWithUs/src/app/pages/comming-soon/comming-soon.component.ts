import { Component, OnInit } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit {

  comingSoonVideoCards : Videocard[];

  constructor() { }

  ngOnInit(): void {
    //filtering  only coming soon video cards
    this.comingSoonVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("comingsoon"));
  }

  GoTo(num)
  {
    console.log("clicked");
    console.log(num);
    //window.location.href= this.comingSoonVideoCards.find(o => o.cardID === num).ytLink;
    window.location.href="/base/"+num;
  }

}
