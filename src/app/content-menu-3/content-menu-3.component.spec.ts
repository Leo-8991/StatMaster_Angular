import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMenu3Component } from './content-menu-3.component';

describe('ContentMenu3Component', () => {
  let component: ContentMenu3Component;
  let fixture: ComponentFixture<ContentMenu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMenu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
