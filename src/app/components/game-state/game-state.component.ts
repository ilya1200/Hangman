import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { GameState } from 'src/app/data-structs/game-state.enum';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.css']
})
export class GameStateComponent implements OnChanges {
  @Input() gameState: GameState;
  @Output() againClicked:EventEmitter<boolean> =
  new EventEmitter<boolean>();
  gameStateMessage: string;
  gameStateIcon: string;
  isPlaying: boolean;

  constructor() { }

  ngOnChanges() {
    this.isPlaying = (this.gameState === GameState.playing);
    this.gameStateMessage = this.getGameStateMessage(this.gameState);
    this.gameStateIcon = this.getGameStateIcon(this.gameState);
  }

  onClick(): void {
    this.againClicked.emit(true);
  }

  getGameStateIcon(gameState: GameState): string {
    let gameStateIcon = "";
    switch (gameState) {
      default:
      case GameState.playing:
        gameStateIcon = "";
        break;
      case GameState.win:
        gameStateIcon = "assets/hangman/hangman-photos/yes_symbol.png";
        break;
      case GameState.lose:
        gameStateIcon = "assets/hangman/hangman-photos/shit_symbol.png";
        break;
    }

    return gameStateIcon;
  }

  getGameStateMessage(gameState: GameState): string {
    let gameStateMessage: string = "";
    switch (gameState) {
      default:
      case GameState.playing:
        gameStateMessage = "";
        break;
      case GameState.win:
        gameStateMessage = "Yes you did is!";
        break;
      case GameState.lose:
        gameStateMessage = "Shit! You died :("
        break;
    }

    return gameStateMessage;
  }

}
