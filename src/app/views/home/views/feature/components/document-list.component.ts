import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  @Input() documents: Document[];
  @Output() selectedDocument = new EventEmitter<Document>();

  onDocumentSelected(document: Document) {
    this.selectedDocument.emit(document);
  }
}


