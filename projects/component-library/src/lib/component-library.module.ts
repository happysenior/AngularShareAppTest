import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryComponent } from './component-library.component';
import { ItemComponent } from './components/item/item.component';
import { ItemCollectionComponent } from './components/item-collection/item-collection.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [ComponentLibraryComponent, ItemComponent, ItemCollectionComponent, TopNavComponent, SideNavComponent],
  exports: [ComponentLibraryComponent, ItemCollectionComponent, TopNavComponent, SideNavComponent],
  bootstrap: [ComponentLibraryComponent]
})
export class ComponentLibraryModule { }
