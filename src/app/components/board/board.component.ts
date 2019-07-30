import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() progress: string; 
  @Output() onKeyPress: EventEmitter<string> = new EventEmitter<string>();

  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', "R", 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  hits: string[] = this.game.getHits();
  misses: string[] = this.game.getMisses();
  constructor(private game: GameService) { }

  ngOnInit() {
  }

  letterClicked(letterPressed: string): void {
    this.onKeyPress.emit(letterPressed);
  }

}
