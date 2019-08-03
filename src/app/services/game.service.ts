import { Injectable } from '@angular/core';
import { IMovie } from '../data-structs/imovie';
import { strictEqual } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public readonly MAX_MISSES: number = 6;
  private letterAnswer: string[] = [];
  private wordsAnswer: string[] = [];
  private hits: string[] = [];
  private prefilled: string[] = [];
  private misses: string[] = [];
  private selectedMovie: string;

  constructor() { }

  public createGame(movies: IMovie[]): string[][] {
    this.selectedMovie = this.selectMovie(movies);

    this.letterAnswer = this.selectedMovie.split("");
    this.wordsAnswer = this.selectedMovie.split(" ");

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
    return this.letterAnswer.join('');
  }

  public preFill() {
    while (this.hits.length < this.letterAnswer.length * 0.25) {
      let letter: string = this.getRandomLetter();
      if (letter.match('[A-Z]{1}')) {
        this.applyGuess(letter);
      }
    }

    this.hits.forEach(letter=>{
      this.prefilled.push(letter);
    })
  }

  private getRandomLetter(): string {
    return this.letterAnswer[this.generateRandomNumber(0, this.letterAnswer.length - 1)];
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

  public getCurrentProgress(): string[][] {
    const answer: string[] = this.wordsAnswer;
    let progress: string[][] = [];

    for (let i = 0; i < answer.length; i++) {
      const word: string[] = answer[i].split("");
      let wordProgress: string[] = [];

      for (let j = 0; j < word.length; j++) {
        const char: string = word[j];
        let display: string = '-';

        if (this.hits.indexOf(char) > -1) {
          display = char;
        }
        wordProgress.push(display);
      }
      progress.push(wordProgress);
    }

    return progress;
  }

  public getRemainingTries(): number {
    return this.MAX_MISSES - this.misses.length;
  }
  public isHit(letter: string): boolean {
    return (this.letterAnswer.indexOf(letter) > -1);
  }

  public isAlreadyBeenGuessed(letter: string): boolean {
    if (this.hits && this.misses) {
      return (this.hits.indexOf(letter) > -1) || (this.misses.indexOf(letter) > -1);
    } else {
      return false;
    }
  }

  public isPrefilled(letter:string):boolean{
    return (this.prefilled.indexOf(letter)>-1);
  }

  public isGameOver(): boolean {
    return (this.isWon() || this.isLose());
  }

  public isWon(): boolean {
    let isWon: boolean = true;
    const progress: string[][] = this.getCurrentProgress();

    for (let i = 0; i < progress.length; i++) {
      const word: string[] = progress[i];

      if (word.indexOf('-') > -1) {
        return false;
      }
    }
    return isWon;
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
