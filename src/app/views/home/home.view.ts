import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';

@Component({
  selector: 'app-home-view',
  template: `
      <div>Selected Document: {{selectedDocument?.name}}</div>
      <app-document-list documentTypeId="1" (selectedDocument)="onSelectedDocument($event)"></app-document-list>
    `,
  styles: [``]
})
export class HomeView implements OnInit {
  selectedDocument: Document;

  constructor() { }

  ngOnInit() { }

  onSelectedDocument(e: Document) {
    this.selectedDocument = e;
  }
}
