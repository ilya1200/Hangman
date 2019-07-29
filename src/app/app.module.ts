import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HangmanStatusComponent } from './components/hangman-status/hangman-status.component';
import { GameStateComponent } from './components/game-state/game-state.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    HangmanStatusComponent,
    GameStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
