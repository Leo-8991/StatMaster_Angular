import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMenu1Component } from './content-menu-1.component';

describe('ContentMenu1Component', () => {
  let component: ContentMenu1Component;
  let fixture: ComponentFixture<ContentMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
