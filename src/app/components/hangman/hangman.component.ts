import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { HttpService } from 'src/app/services/http.service';
import { IMovie } from 'src/app/data-structs/imovie';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { GameState } from 'src/app/data-structs/game-state.enum';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  @ViewChild('answerAlert') private answerAlert: SwalComponent;
  progress: string[];
  isHit: boolean;
  hangmanStatus: number;
  gameState: GameState;
  answer: string;
  answerString: string;

  constructor(private http: HttpService,
    private game: GameService) { }

  createGame(): void {
    this.http.getMovies().subscribe(
      movies => {
        this.progress = this.game.createGame(movies);
        this.hangmanStatus = 0;
        this.gameState = GameState.playing;
        this.answer = this.game.getAnswer();//For Testing
      },
      error => this.errorMessage(error)
    )
  }

  onGuessInput(guessInputLetter: string): void { // Keypress should use it
    if (this.gameState === GameState.playing) {
      this.applyGuess(guessInputLetter);
    }
  }

  applyGuess(guessInputLetter: string): void {
    this.isHit = this.game.applyGuess(guessInputLetter);
    this.progress = this.game.getCurrentProgress();

    if (!this.isHit) {
      this.hangmanStatus += 1; //derived from remainig tries
    }

    this.determineGameOutcome();
  }

  determineGameOutcome(): void {
    if (this.game.isWon()) {
      this.gameState = GameState.win;
    } else if (this.game.getRemainingTries() === 0) { // isLose
      this.gameState = GameState.lose;
      this.hangmanStatus = 6;
      this.answerAlert.show()
      // revealTheAnswer(this.answer);
    } else {
      this.gameState = GameState.playing;
    }
  }

  startNewGame(): void {
    this.createGame();
  }

  errorMessage(error: any): void {
    console.log(error);
  }

  ngOnInit() {
    this.createGame();
  }

}
