import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public navbarCollapsed: boolean = true;
  title = 'FFMVic Events Prototype';

  constructor() { 
  }

  ngOnInit() {
  }

}
