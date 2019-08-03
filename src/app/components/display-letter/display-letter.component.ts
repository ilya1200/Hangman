import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-display-letter',
  templateUrl: './display-letter.component.html',
  styleUrls: ['./display-letter.component.css']
})
export class DisplayLetterComponent implements OnInit {
  @Input() displayLetter: string;
  prefilled: string = 'assets/hangman/hangman-specs/assets/Rectangle.png';
  toBeFilled: string = 'assets/hangman/hangman-specs/assets/Rectangle Copy 3.png';
  constructor(private game: GameService) { }

  ngOnInit() {
  }

}
