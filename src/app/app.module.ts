import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentLibraryModule } from 'component-library'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
