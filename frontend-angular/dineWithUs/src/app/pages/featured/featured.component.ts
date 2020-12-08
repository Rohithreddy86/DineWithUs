import { Component, OnInit } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  videocards1 :Videocard[];
  featuredVideoCards : Videocard[];

  constructor() { }

  ngOnInit(): void {
    this.videocards1 = VIDEOCARDS;
    //filtering only featured video cards
    this.featuredVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("featured"));
  }

  GoTo(num)
  {
    console.log("clicked");
    console.log(num);
    window.location.href= this.featuredVideoCards.find(o => o.cardID === num).ytLink;
  }

}
