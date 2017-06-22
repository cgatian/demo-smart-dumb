import { Component, OnInit } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../document.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-feature',
  template: `
      <div>Selected Document: {{selectedDocument?.name}}</div>
      <app-document-list [documents]="documents | async" (selectedDocument)="onSelectedDocument($event)"></app-document-list>
    `,
  styleUrls: [
    './feature.component.scss'
  ]
})
export class FeatureComponent implements OnInit {
  selectedDocument: Document;
  documents: Observable<Document[]>;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {

    this.documents = this.documentService.getDocumentsByTypeId(1);
  }

  onSelectedDocument(document: Document) {
    this.selectedDocument = document;
  }
}
