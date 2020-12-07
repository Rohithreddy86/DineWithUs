import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Scrollable } from './../../models/Scrollable';
import {SCROLLABLES} from './../../models/Scrollables-static'
@Component({
    selector: 'app-scrolling-content',
    templateUrl: './scrolling-content.component.html',
    styleUrls: ['./scrolling-content.component.scss']
})
export class ScrollingContentComponent implements OnInit {
    slideshowDelay=2000;

    constructor() { }

    ngOnInit(): void {
    }
    dataSource = [];
    dataSource1 = SCROLLABLES.forEach(e => this.dataSource.push(e.imageUrl));
    GoTo(num)
    {
        console.log(num)
        //window.location.href= this.scrollables.find(o => o.ID === num).imageClickLink;
    }

}
