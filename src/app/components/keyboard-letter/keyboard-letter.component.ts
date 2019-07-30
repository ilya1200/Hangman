import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard-letter',
  templateUrl: './keyboard-letter.component.html',
  styleUrls: ['./keyboard-letter.component.css']
})
export class KeyboardLetterComponent implements OnInit {
  @Input() keyboardLetter: string;
  @Output() onLetterClicked: EventEmitter<string> = new EventEmitter<string>();

  @Input() isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  letterClicked(): void {
    this.isDisabled = true;
    this.onLetterClicked.emit(this.keyboardLetter);
  }
}
