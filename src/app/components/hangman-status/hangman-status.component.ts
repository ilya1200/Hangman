import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-status',
  templateUrl: './hangman-status.component.html',
  styleUrls: ['./hangman-status.component.css']
})
export class HangmanStatusComponent implements OnChanges {
  @Input() hangmanStatus: number = 0;
  hangmanImages: string[] = [
    "assets/hangman/hangman-photos/Hangman1.png",
    "assets/hangman/hangman-photos/Hangman2.png",
    "assets/hangman/hangman-photos/Hangman3.png",
    "assets/hangman/hangman-photos/Hangman4.png",
    "assets/hangman/hangman-photos/Hangman5.png",
    "assets/hangman/hangman-photos/Hangman6.png",
    "assets/hangman/hangman-photos/Hangman7.png"
  ];

  imgIndex: number = this.hangmanStatus;
  hangmanImg: string = this.hangmanImages[this.imgIndex];

  constructor() {
  }

  ngOnChanges() {
    this.updateHangmanImg(this.hangmanStatus);
  }

  updateHangmanImg(hangmanStatus: number): void {
    if (!hangmanStatus || hangmanStatus < 0 || hangmanStatus > this.hangmanImages.length - 1) {
      this.hangmanStatus = 0;
    }
    this.imgIndex = hangmanStatus;
    this.hangmanImg = this.hangmanImages[this.imgIndex];
  }
}
