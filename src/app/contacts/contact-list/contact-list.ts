import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList implements OnInit, OnDestroy {
  subscription: Subscription;
  contacts: Contact[] = [];
  term: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts();
    this.subscription = this.contactService.contactListChangedEvent.subscribe((contactsList: Contact[]) => {
      this.contacts = contactsList;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(value: string) {
    this.term = value;
  }
}
