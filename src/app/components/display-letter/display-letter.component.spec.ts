import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLetterComponent } from './display-letter.component';

describe('DisplayLetterComponent', () => {
  let component: DisplayLetterComponent;
  let fixture: ComponentFixture<DisplayLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
