import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { Contact } from '../../contacts/contact.model';
import { ContactService } from '../../contacts/contact.service';

@Component({
  selector: 'app-message-item',
  standalone: false,
  templateUrl: './message-item.html',
  styleUrl: './message-item.css'
})
export class MessageItem implements OnInit {
  @Input() message: Message;
  messageSender: string;
  
  constructor(private contactService: ContactService) {}
  
  ngOnInit() {
    // Check if sender is already a populated Contact object
    if (typeof this.message.sender === 'object' && this.message.sender !== null) {
      this.messageSender = (this.message.sender as Contact).name;
    } else {
      // Sender is an ID string, look it up
      const contact: Contact = this.contactService.getContact(this.message.sender as string);
      this.messageSender = contact ? contact.name : (this.message.sender as string);
    }
  }
}
