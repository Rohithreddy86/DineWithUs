import { Component, OnInit } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.scss']
})
export class MostRecentComponent implements OnInit {

  mostRecentVideoCards : Videocard[];

  constructor() { }

  ngOnInit(): void {
    //filtering most recent video cards and giving only first four videocards to view
    this.mostRecentVideoCards = VIDEOCARDS.filter(o => o.videoType.includes("mostrecent"));
  }

  GoTo(num)
  {
    console.log("clicked");
    console.log(num);
    //window.location.href= this.mostRecentVideoCards.find(o => o.cardID === num).ytLink;
    window.location.href="/base/"+num;
  }

}
