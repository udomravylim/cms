import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  
  documents: Document[] = [
    new Document('1', 'List Document 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'https://example.com'),
    new Document('2', 'List Document 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'https://example.com'),
    new Document('3', 'List Document 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'https://example.com'),
    new Document('4', 'List Document 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'https://example.com'),
    new Document('5', 'List Document 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'https://example.com')
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
