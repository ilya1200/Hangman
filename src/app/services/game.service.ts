import { Injectable } from '@angular/core';
import { IMovie } from '../data-structs/imovie';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public readonly MAX_MISSES: number = 7;
  private answer: string;
  private hits: string;
  private misses: string;

  constructor() { }

  public createGame(movies: IMovie[]): string {
    this.answer = this.selectMovie(movies).split("\\s{2,}").join(' ');
    this.hits = "";
    this.misses = "";

    return this.getCurrentProgress();
  }

  public getAnswer(): string {
    return this.answer;
  }

  public applyGuess(letters: string): boolean {
    try {
      const guess = this.normalizeGuess(letters);
      const isHit = this.isHit(guess);

      if (isHit) {
        this.hits += guess;
      } else {
        this.misses += guess;
      }
      return isHit;

    } catch (error) {
      throw error;
    }
  }

  public getCurrentProgress(): string {
    const answer = this.answer;
    let progress: string = "";

    for (let i = 0; i < answer.length; i++) {
      let char: string = answer.charAt(i);
      let display: string;

      display = '-';
      if (this.hits.indexOf(char) > -1 || char === ' ') {
        display = char;
      }
      progress += display;
    }
    return progress;
  }

  public getRemainingTries(): number {
    return this.MAX_MISSES - this.misses.length;
  }
  public isHit(letter: string): boolean {
    return (this.answer.indexOf(letter) > -1);
  }

  public isAlreadyBeenGuessed(letter: string): boolean {
    return (this.hits.indexOf(letter) > -1) || (this.misses.indexOf(letter) > -1);
  }

  public isWon(): boolean {
    return this.getCurrentProgress().indexOf('-') > -1;
  }


  private normalizeGuess(letters: string): string {
    if (letters.length === 0) {
      throw "No letter found";
    }

    const letter: string = letters.charAt(0);
    if (this.isAlreadyBeenGuessed(letter)) {
      throw `The letter ${letter} has already been guessed`;
    }
    return letter;
  }

  private selectMovie(movies: IMovie[]): string {
    const randomMovie = this.generateRandomNumber(0, movies.length - 1);
    return movies[randomMovie].title.toLowerCase();
  }

  private generateRandomNumber(lower: number, upper: number): number {
    return Math.floor(Math.random() * (upper - (lower) + 1)) + (lower);
  }
}
