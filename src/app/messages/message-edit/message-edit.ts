import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css'
})
export class MessageEdit {
  @ViewChild('subject') subjectInputRef!: ElementRef;
  @ViewChild('msgText') msgTextInputRef!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string = "Ravy"; // Using Rex Barzee's ID

  constructor(private messageService: MessageService) {}

  onSendMessage() {
    // Get the value stored in the subject input element
    const subjectValue = this.subjectInputRef.nativeElement.value;
    
    // Get the value stored in the msgText input element
    const msgTextValue = this.msgTextInputRef.nativeElement.value;
    
    console.log('Subject:', subjectValue);
    console.log('Message:', msgTextValue);
    console.log('Sender:', this.currentSender);
    
    // Create a new Message object
    const newMessage = new Message(
      (this.messageService.getMessages().length + 1).toString(), // generate unique id
      subjectValue, // subject from input
      msgTextValue, // msgText from input
      this.currentSender // sender from class variable
    );
    
    console.log('New message created:', newMessage);
    
    // Call the addMessage method of the MessageService and pass it the new Message object
    this.messageService.addMessage(newMessage);
    
    // Emit the addMessageEvent to notify parent components
    this.addMessageEvent.emit(newMessage);
    
    // Clear the form after sending
    this.onClear();
  }

  onClear() {
    // Assign a blank value to the subject and msgText input elements
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }
}
