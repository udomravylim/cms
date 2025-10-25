import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { Header } from './header/header';
import { Contacts } from './contacts/contacts';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactItem } from './contacts/contact-item/contact-item';
import { Documents } from './documents/documents';
import { DocumentList } from './documents/document-list/document-list';
import { DocumentItem } from './documents/document-item/document-item';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { Messages } from './messages/messages';
import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';
import { MessageList } from './messages/message-list/message-list';
import { Contact } from './contacts/contact/contact';
import { AppRoutingModule } from './app-routing.module';
import { DocumentEdit } from './documents/document-edit/document-edit';
import { ContactEdit } from './contacts/contact-edit/contact-edit';

@NgModule({
  declarations: [
    App,
    Header,
    Contacts,
    ContactList,
    ContactDetail,
    ContactItem,
    Documents,
    DocumentList,
    DocumentItem,
    DocumentDetail,
    Messages,
    MessageItem,
    MessageEdit,
    MessageList,
    Contact,
    DocumentEdit,
    ContactEdit
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
