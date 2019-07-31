import { Injectable } from '@angular/core';
import { IMovie } from '../data-structs/imovie';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public readonly MAX_MISSES: number = 6;
  private answer: string[] = [];
  private hits: string[] = [];
  private misses: string[] = [];

  constructor() { }

  public createGame(movies: IMovie[]): string[] {
    this.answer = this.selectMovie(movies).split("\\s{2,}").join(' ').split("");
    this.hits = [];
    this.misses = [];

    this.preFill();

    return this.getCurrentProgress();
  }

  public getHits(): string[] {
    return this.hits;
  }

  public getMisses(): string[] {
    return this.misses;
  }

  public getAnswer(): string {
    return this.answer.join('');
  }

  public preFill() {
    while (this.hits.length < this.answer.length * 0.25) {
      let letter: string = this.getRandomLetter();
      if (letter.match('[A-Z]{1}')) {
        this.applyGuess(letter);
      }
    }
  }

  private getRandomLetter(): string {
    return this.answer[this.generateRandomNumber(0, this.answer.length - 1)];
  }

  public applyGuess(guess: string): boolean {
    const isHit = this.isHit(guess);

    if (isHit) {
      this.hits.push(guess);
    } else {
      this.misses.push(guess);
    }
    return isHit;
  }

  public getCurrentProgress(): string[] {
    const answer = this.answer;
    let progress: string[] = [];

    for (let i = 0; i < answer.length; i++) {
      let char: string = answer[i];
      let display: string;

      display = '-';
      if (this.hits.indexOf(char) > -1 || char === ' ') {
        display = char;
      }
      progress.push(display);
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
    if (this.hits && this.misses) {
      return (this.hits.indexOf(letter) > -1) || (this.misses.indexOf(letter) > -1);
    } else {
      return false;
    }
  }

  public isGameOver(): boolean {
    return (this.isWon() || this.isLose());
  }

  public isWon(): boolean {
    return !(this.getCurrentProgress().indexOf('-') > -1);
  }

  public isLose(): boolean {
    return (this.getRemainingTries() === 0);
  }

  private selectMovie(movies: IMovie[]): string {
    const randomMovie = this.generateRandomNumber(0, movies.length - 1);
    return movies[randomMovie].title.toUpperCase();
  }

  private generateRandomNumber(lower: number, upper: number): number {
    return Math.floor(Math.random() * (upper - (lower) + 1)) + (lower);
  }
}
