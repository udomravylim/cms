import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() selectedFeatureEvent = new EventEmitter<string>();
  isDropdownOpen = false;

  onSelected(selectedEvent: string){
    this.selectedFeatureEvent.emit(selectedEvent);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
