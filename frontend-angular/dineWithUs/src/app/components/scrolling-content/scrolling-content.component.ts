import { Component, OnInit } from '@angular/core';

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
    dataSource = [
        "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person1.png",
        "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
        "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person3.png",
        "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person4.png"
    ];

}
