import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { HttpService } from 'src/app/services/http.service';
import { IMovie } from 'src/app/data-structs/imovie';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { GameState } from 'src/app/data-structs/game-state.enum';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  progress: string;
  hangmanStatus: number;
  gameState: GameState;
  answer:string

  constructor(private http: HttpService, private game: GameService) { }

  createGame(): void {
    this.http.getMovies().subscribe(
      movies => {
        this.progress = this.game.createGame(movies);
        this.hangmanStatus = 0;
        this.gameState = GameState.playing;
        this.answer=this.game.getAnswer();
      },
      error => this.errorMessage(error)
    )
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
