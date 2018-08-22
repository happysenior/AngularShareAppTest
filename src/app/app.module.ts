import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentLibraryModule } from 'component-library'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { SideNavAndContentComponent } from './side-nav-and-content/side-nav-and-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavAndContentComponent
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
