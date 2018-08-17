import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from 'component-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild(SideNavComponent)
  sideNavComponent: SideNavComponent;

  private handleTopNavToggle(){
    //this._opened = !this._opened;
    this.sideNavComponent._toggleSidebar();
  }
}
