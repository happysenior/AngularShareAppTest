import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output()
  public toggleClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit() {
  }

  public toggleSidebar() {
    this.toggleClicked.emit();
  }

}
