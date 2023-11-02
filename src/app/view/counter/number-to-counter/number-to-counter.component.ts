import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-number-to-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './number-to-counter.component.html',
  styleUrls: ['./number-to-counter.component.scss'],
})
export class NumberToCounterComponent {
  @Input() numberToCounter: number = 0;

  incrementCounter(): void {
    console.log('incremented by: ', this.numberToCounter);
  }

  decrementCounter(): void {
    console.log('decremented by: ', this.numberToCounter);
  }
}
