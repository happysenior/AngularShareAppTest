import { Component, OnInit, Input } from '@angular/core';

/**Card component which can have its title specified and be collapsible or not */
@Component({
  selector: 'app-card-collapsible',
  templateUrl: './card-collapsible.component.html',
  styleUrls: ['./card-collapsible.component.scss']
})
export class CardCollapsibleComponent implements OnInit {
  
  @Input() public isCollapsible: boolean = true;
  @Input() public title: string = '';
  public isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
