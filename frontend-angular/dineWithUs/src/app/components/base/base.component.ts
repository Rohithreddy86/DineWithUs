import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import { VIDEOCARDS } from './../../models/Videocards-static';
import { Videocard } from './../../models/Videocard';

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

  constructor(@Inject(ActivatedRoute) private activatedRoute: ActivatedRoute, @Inject(DomSanitizer) private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.selectedID = this.activatedRoute.snapshot.params.id;
    this.youtubeurl = this.constantyturl + VIDEOCARDS.find(o => o.cardID == this.selectedID).ytLink.slice(32,);
    this.videoTitle = VIDEOCARDS.find(o => o.cardID == this.selectedID).title;
    this.videoDescription = VIDEOCARDS.find(o => o.cardID == this.selectedID).description;
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeurl)

}

}
