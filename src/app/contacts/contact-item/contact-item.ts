import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  standalone: false,
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css'
})
export class ContactItem {
  @Input() contact!: Contact;
  @Output() contactSelected = new EventEmitter<Contact>();

  onContactSelected() {
    this.contactSelected.emit(this.contact);
  }
}
