import { Component, OnInit } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../document.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-one-component-view',
  templateUrl: './one-component.view.html',
  styleUrls: [
    './one-component.view.scss'
  ]
})
export class OneComponentView implements OnInit {
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
