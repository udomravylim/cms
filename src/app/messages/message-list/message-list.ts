import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList {
  messages: Message[] = [
    new Message('1', 'Grades Posted', 'The grades for this assignment have been posted.', 'Bro. Jackson'),
    new Message('2', 'Due Dates', 'When is assignemnt 3 due?', 'Steve Johnson'),
    new Message('3', 'Due Date Resp', 'Assignment 3 is due on Saturday at 11:30pm', 'Bro. Jackson'),
    new Message('4', 'want to meet', 'Can I meet with you tomorrow?', 'Mark Smith'),
    new Message('5', 'Thanks', 'Thanks for the help with the assignment', 'Steve Johnson')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
