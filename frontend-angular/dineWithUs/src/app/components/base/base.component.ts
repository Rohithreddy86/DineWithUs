import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/NewVideocard';
import { FirebaseDatabaseService } from 'src/app/services/firebaseDatabaseService';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

    selectedID: number;
    youtubeurl: string;
    videoTitle: string;
    videoDescription: string;
    safeSrc: SafeResourceUrl;
    constantyturl : string = "https://www.youtube.com/embed/";

    course:any;
    testVar : Videocard;
    lastID : Number;
    videoCards : Videocard[] = [];
    videocardsdatastatic;

  constructor(@Inject(ActivatedRoute) private activatedRoute: ActivatedRoute, @Inject(DomSanitizer) private sanitizer: DomSanitizer,@Inject(AngularFireDatabase) private db: AngularFireDatabase, @Inject(FirebaseDatabaseService) private service : FirebaseDatabaseService) { }

  ngOnInit(): void {

    this.service.getVideoCardsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(objectsFromDB => {
        this.videocardsdatastatic = objectsFromDB
        this.selectedID = this.activatedRoute.snapshot.params.id;
        this.youtubeurl = this.constantyturl + this.videocardsdatastatic.find(o => o.cardID == this.selectedID).ytLink.slice(32,);
        this.videoTitle = this.videocardsdatastatic.find(o => o.cardID == this.selectedID).title;
        this.videoDescription = this.videocardsdatastatic.find(o => o.cardID == this.selectedID).description;
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeurl)
    });
}

}
