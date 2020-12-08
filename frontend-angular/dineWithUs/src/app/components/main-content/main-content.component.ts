import { Component, OnInit } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  featuredVideoCards : Videocard[];
  comingSoonVideoCards : Videocard[];
  topViewedVideoCards : Videocard[];
  mostRecentVideoCards : Videocard[];
  videocards1 :Videocard[];
  youtubeurl : string;
  constantyturl : string = "https://www.youtube.com/embed/";

  constructor() { }

  ngOnInit(): void {

    this.videocards1=VIDEOCARDS;
    //filtering featured video cards and giving only first four videocards to view
    this.featuredVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("featured"));
    this.featuredVideoCards = this.featuredVideoCards.slice(0, 4)

    //filtering coming soon video cards and giving only first four videocards to view
    this.comingSoonVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("comingsoon"));
    this.comingSoonVideoCards = this.comingSoonVideoCards.slice(0,4);

    //filtering most recent video cards and giving only first four videocards to view
    this.mostRecentVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("mostrecent"));
    this.mostRecentVideoCards = this.mostRecentVideoCards.slice(0,4);

    //filtering top viewed video cards and giving only first four videocards to view
    this.topViewedVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("topviewed"));
    this.topViewedVideoCards = this.topViewedVideoCards.slice(0,4);

    this.youtubeurl = this.constantyturl + this.featuredVideoCards[0].ytLink.slice(32,)
    console.log(this.youtubeurl)


  }

  GoTo(num)
  {
    console.log("clicked");
    console.log(num);
    window.location.href= this.videocards1.find(o => o.cardID === num).ytLink;
  }
}
