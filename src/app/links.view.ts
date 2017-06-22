import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  template: `
        <a routerLink="/docs/one-component">One Component</a>
        <a routerLink="/docs/feature-component">Feature Component</a>
        <a routerLink="/docs/smart-dumb">Smart Dumb</a>
    `,
  styles: [``]
})
export class LinksView implements OnInit {
  constructor() { }

  ngOnInit() { }
}
