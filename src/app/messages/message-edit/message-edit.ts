import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

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
  currentSender: string = 'Your Name';

  onSendMessage() {
    // Get the value stored in the subject input element
    const subjectValue = this.subjectInputRef.nativeElement.value;
    
    // Get the value stored in the msgText input element
    const msgTextValue = this.msgTextInputRef.nativeElement.value;
    
    // Create a new Message object
    const newMessage = new Message(
      '1', // hardcoded id
      subjectValue, // subject from input
      msgTextValue, // msgText from input
      this.currentSender // sender from class variable
    );
    
    // Call the addMessageEvent emitter's emit() method and pass it the new Message object
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    // Assign a blank value to the subject and msgText input elements
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }
}
