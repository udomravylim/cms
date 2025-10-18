import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  onAddMessage(message: Message) {
    // This method is called when a new message is added via the message-edit component
    // The message is already added to the service, so we just need to update our local array
    console.log('MessageList received new message:', message);
    this.messages = this.messageService.getMessages();
    console.log('Updated messages array:', this.messages);
  }

}
