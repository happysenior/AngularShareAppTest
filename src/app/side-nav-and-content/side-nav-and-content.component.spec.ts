import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAndContentComponent } from './side-nav-and-content.component';

describe('SideNavAndContentComponent', () => {
  let component: SideNavAndContentComponent;
  let fixture: ComponentFixture<SideNavAndContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavAndContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavAndContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
