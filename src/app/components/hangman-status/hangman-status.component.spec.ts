import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanStatusComponent } from './hangman-status.component';

describe('HangmanStatusComponent', () => {
  let component: HangmanStatusComponent;
  let fixture: ComponentFixture<HangmanStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
