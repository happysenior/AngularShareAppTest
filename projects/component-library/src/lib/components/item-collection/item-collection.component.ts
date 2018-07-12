import { Component, OnInit, Input } from '@angular/core';
import { ItemViewModel } from '../../view-models/item-view-model';

@Component({
  selector: 'app-item-collection',
  templateUrl: './item-collection.component.html',
  styleUrls: ['./item-collection.component.scss']
})
export class ItemCollectionComponent implements OnInit {

  // TODO: is this good component design? Doesn't feel so... Using a VM, which is used by component
  // ..however passing components around seems awkward and unnecessary, mostly due to being unable
  // to use ctors
  @Input()
  public items: ItemViewModel[];

  constructor() { }

  ngOnInit() {
  }
}
