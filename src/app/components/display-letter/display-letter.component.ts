import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-letter',
  templateUrl: './display-letter.component.html',
  styleUrls: ['./display-letter.component.css']
})
export class DisplayLetterComponent implements OnInit {
  @Input() displayLetter:string;
  constructor() { }

  ngOnInit() {
  }

}
