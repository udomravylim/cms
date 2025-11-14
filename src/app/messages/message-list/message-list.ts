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
    this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  onAddMessage(message: Message) {
    // This method is called when a new message is added via the message-edit component
    // The message is already added to the service, and the event subscription will update the array
    console.log('MessageList received new message:', message);
    // Messages array will be updated automatically via the messageChangedEvent subscription
  }

}
