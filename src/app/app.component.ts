import { Component, OnInit } from '@angular/core';

declare function initMainTemplate():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'continental';
  // ngOnInit(): void {
  //  setTimeout(() => {
  //   initMainTemplate();
  //  });
  // }
}
