import { Component, OnInit } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../document.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: [
    './single.component.scss'
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
