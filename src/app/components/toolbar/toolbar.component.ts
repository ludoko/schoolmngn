import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() toggleSidenavEvent = new EventEmitter<void>();

  constructor() { }

  toggleSidenav() {
    console.log('Toggel side nav');
    this.toggleSidenavEvent.emit();
  }
}
