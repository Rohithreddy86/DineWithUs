import { Component, OnInit } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';

@Component({
  selector: 'app-top-viewed',
  templateUrl: './top-viewed.component.html',
  styleUrls: ['./top-viewed.component.scss']
})
export class TopViewedComponent implements OnInit {

  topViewedVideoCards : Videocard[];

  constructor() { }

  ngOnInit(): void {
    //filtering top viewed video cards and giving only first four videocards to view
    this.topViewedVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("topviewed"));
  }

  GoTo(num)
  {
    console.log("clicked");
    console.log(num);
    //window.location.href= this.topViewedVideoCards.find(o => o.cardID === num).ytLink;
    window.location.href="/base/"+num;
  }

}
