import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-card',
  imports: [],
  templateUrl: './score-card.html',
  styleUrl: './score-card.css'
})
export class ScoreCard {
  @Input() name = '';
  @Input() score = 0;
  @Input() weight = 0;
  @Input() description = '';
}