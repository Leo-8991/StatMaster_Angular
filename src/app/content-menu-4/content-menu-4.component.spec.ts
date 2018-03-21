import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMenu4Component } from './content-menu-4.component';

describe('ContentMenu4Component', () => {
  let component: ContentMenu4Component;
  let fixture: ComponentFixture<ContentMenu4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMenu4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMenu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
