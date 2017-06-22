import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Document } from '../../../document.model';
import { DocumentService } from '../../../document.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.container.html',
  styleUrls: ['./document-list.container.scss']
})
export class DocumentListContainer implements OnInit {
  @Input() documentTypeId: number;
  @Output() selectedDocument = new EventEmitter<Document>();

  documents: Observable<Document[]>;

  constructor(private userService: DocumentService) { }

  ngOnInit() {
    this.documents = this.userService.getDocumentsByTypeId(+this.documentTypeId);
  }

  onDocumentSelected(document) {
    this.selectedDocument.emit(document);
  }
}
