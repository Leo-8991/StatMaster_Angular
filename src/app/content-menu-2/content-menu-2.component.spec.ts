import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMenu2Component } from './content-menu-2.component';

describe('ContentMenu2Component', () => {
  let component: ContentMenu2Component;
  let fixture: ComponentFixture<ContentMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
