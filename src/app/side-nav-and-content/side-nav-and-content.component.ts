import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-side-nav-and-content',
  templateUrl: './side-nav-and-content.component.html',
  styleUrls: ['./side-nav-and-content.component.scss']
})
export class SideNavAndContentComponent implements OnInit {

  // Sidebar classes
  private OpenedClass = 'sidenav-opened';
  private DockedClass = 'side-nav-docked';
  private OpenWhileDockedClass = 'sidenav-hover-open';
  private CollapsedClass = 'sidenav-closed';

  // Content Area classes
  private ContentWhileDockedClass = 'right-col-when-docked';

  public isOpened = true;
  public isDocked = false;
  public isOpenWhileDocked = false;
  public isContentDocked = false;

  public SideNavToggleClass: string;
  public SideNavHoverToggleClass: string;
  public ContentToggleClass: string;
  

  constructor() { }

  ngOnInit() {
    this.updateToggleClass();
  }

  // Toggle function
  public toggleSidenav() {
    this.isOpened = !this.isOpened;
    this.isDocked = !this.isDocked;
    this.isContentDocked = !this.isContentDocked;

    this.updateToggleClass();
  }

  //When user hovers over a docked menu, the menu will expand
  public _toggleSidebarHover() {
    if (this.isDocked) {
      this.SideNavHoverToggleClass = this.OpenWhileDockedClass;
    }
  }

  //when user unhovers the docked menu, the menu should dock itself
  public _toggleSidebarLeave() {
    if (this.SideNavHoverToggleClass === this.OpenWhileDockedClass){
      this.SideNavHoverToggleClass = "";
      console.log('leave');
    }
    else {
      console.log('past leave');
    }
  }

  // Updates the classes as a string to be used by the sidenav
  private updateToggleClass() {
    if (this.isOpened){
      this.SideNavToggleClass = this.OpenedClass;
      this.ContentToggleClass = "";

    } else {
      this.SideNavToggleClass = this.DockedClass;
      this.ContentToggleClass = this.ContentWhileDockedClass;

    }
  }

  
  
  //if menu is docked and hovered, then this function will dock the menu when mouse hover is released 
    // public _toggleSidebarLeave() {
    //   if (this._hoverIsDocked === true) {
    //     this._opened = !this._opened;
    //     this._hoverIsDocked = true;
    //     this._menuIconsPushed = true;
    //   }
    // }

}
