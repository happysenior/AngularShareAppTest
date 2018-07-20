import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public _opened: boolean = true;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
}
