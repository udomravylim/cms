import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'app-document-detail',
  standalone: false,
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css'
})
export class DocumentDetail implements OnInit {
  document: Document;
  nativeWindow: any;

  constructor(private documentService: DocumentService, private router: Router, private route: ActivatedRoute, private windRefService: WindRefService) {}

  ngOnInit() {
    this.nativeWindow = this.windRefService.getNativeWindow();
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.document = this.documentService.getDocument(id);
    });
  }

  onView() {
    if (this.document) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }
}
