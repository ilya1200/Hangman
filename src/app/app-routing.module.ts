import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangmanComponent } from './components/hangman/hangman.component';

const routes: Routes = [
  { path: '', component: HangmanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
