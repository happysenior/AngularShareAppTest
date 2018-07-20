import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollapsibleComponent } from './card-collapsible.component';

describe('CardCollapsibleComponent', () => {
  let component: CardCollapsibleComponent;
  let fixture: ComponentFixture<CardCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
