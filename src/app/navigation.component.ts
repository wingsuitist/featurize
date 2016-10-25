import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ftr-navigation',
  template: `
    <ul>
      <li *ngFor="let page of pages">
        <a [routerLink]="page.link">{{page.title}}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class NavigationComponent implements OnInit {
  pages = [
    {link: "features", title: "Features"},
    {link: "features/top", title: "Top Features"},
    {link: "features/add", title: "Add"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
