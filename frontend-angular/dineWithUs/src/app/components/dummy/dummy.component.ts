import { Component, Injectable, OnInit } from '@angular/core';
// import {AngularFireDatabase} from 'angularfire2/database'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import {Inject} from '@angular/core';

import { Videocard } from './../../models/NewVideoCard'
import { FirebaseDatabaseService } from 'src/app/services/firebaseDatabaseService';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  course:any;
  testVar : Videocard;
  lastID : Number;
  videoCards : Videocard[] = [];
  featuredVideoCards : Videocard[] = [];
  comingSoonVideoCards : Videocard[] = [];
  topViewedVideoCards : Videocard[] = [];
  mostRecentVideoCards : Videocard[] = [];

  constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase, @Inject(FirebaseDatabaseService) private service : FirebaseDatabaseService) { }

  ngOnInit(): void {

    this.service.getAllVideoCards()
    .subscribe(actions => {
      this.testVar =actions.payload.val() as Videocard;
      this.videoCards.push(this.testVar);  
      //console.log(actions.payload.val().cardID)

      //console.log(this.videoCards)

      console.log("all videocards");
      console.log(this.videoCards)

      this.featuredVideoCards = this.videoCards.filter(o => o.videoType["featured"]==true);
      console.log("featured videocards");
      console.log(this.featuredVideoCards)

      this.topViewedVideoCards = this.videoCards.filter(o => o.videoType["topviewed"]==true);
      console.log("topviewed videocards");
      console.log(this.topViewedVideoCards)

      this.comingSoonVideoCards = this.videoCards.filter(o => o.videoType["comingsoon"]==true);
      console.log("comingsoon videocards");
      console.log(this.comingSoonVideoCards)

      this.mostRecentVideoCards = this.videoCards.filter(o => o.videoType["mostrecent"]==true);
      console.log("mostrecent videocards");
      console.log(this.mostRecentVideoCards)
    });
    
    const testobj = {
      cardID: 2,
      description: "How to make Batani chat in 3 minutes in Telugu",
      imageUrl: "./../../../assets/images/logo.jpg",
      title: "Batani Chat 2",
      videoType: {comingsoon: true, featured: true, mostrecent: false, topviewed: false},
      ytLink: "https://www.youtube.com/watch?v=TfNMoQrOeCU"
    } as Videocard;
    
    //this below line works.
    //this.service.createVideoCard(testobj);
    
  }
}
