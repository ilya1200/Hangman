import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HangmanStatusComponent } from './components/hangman-status/hangman-status.component';
import { GameStateComponent } from './components/game-state/game-state.component';
import { BoardComponent } from './components/board/board.component';
import { KeyboardLetterComponent } from './components/keyboard-letter/keyboard-letter.component';
import { DisplayLetterComponent } from './components/display-letter/display-letter.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    HangmanStatusComponent,
    GameStateComponent,
    BoardComponent,
    KeyboardLetterComponent,
    DisplayLetterComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
