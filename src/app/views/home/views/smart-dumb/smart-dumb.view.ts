import { Component, OnInit } from '@angular/core';
import { Document } from '../../document.model';

@Component({
  selector: 'app-smart-dumb-view',
  template: `
      <div>Selected Document: {{selectedDocument?.name}}</div>
      <app-document-list documentTypeId="1" (selectedDocument)="onSelectedDocument($event)"></app-document-list>


    `,
  styles: [``]
})
export class SmartDumbView implements OnInit {
  selectedDocument: Document;

  constructor() { }

  ngOnInit() { }

  onSelectedDocument(document: Document) {
    this.selectedDocument = document;
  }
}
