import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'ng-sidebar';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public _opened: boolean = true;
  public _hoverIsDocked: boolean = false;
  public _menuIconsPushed: boolean = false;

  // What is the component name of 'ng-sidebar?
  @ViewChild('ngSidebar')
  ngSideBar: Sidebar;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
    this._menuIconsPushed = !this._menuIconsPushed;
    this._hoverIsDocked = !this._hoverIsDocked;
  }
  
  // public _toggleSidebarHover() {
  //   if (this._opened == false) {
  //     this._opened = !this._opened;
  //   }
  // }

  //When user hovers over a docked menu, the menu will expand
  public _toggleSidebarHover() {
    if (this.ngSideBar._isDocked) {
      this._opened = !this._opened;
      this._hoverIsDocked = true;
      this._menuIconsPushed = false;
    }
  }

//if menu is docked and hovered, then this function will dock the menu when mouse hover is released 
  public _toggleSidebarLeave() {
    if (this._hoverIsDocked === true) {
      this._opened = !this._opened;
      this._hoverIsDocked = true;
      this._menuIconsPushed = true;
    }
  }

  //Align menu icons from docked to undocked
  // public _dockedMenuIcons() {
  //   if (this.ngSideBar._isDocked) {
  //     this._menuIconsPushed = !this._menuIconsPushed;
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }

}
