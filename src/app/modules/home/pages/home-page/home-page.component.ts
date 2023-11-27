import { Component, OnInit } from '@angular/core';

declare function initMainTemplate():any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
     initMainTemplate();
    });
  }
}
