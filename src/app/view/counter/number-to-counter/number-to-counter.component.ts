import { Component } from '@angular/core';
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
  incrementCounter(): void {
    console.log('incremented!');
  }

  decrementCounter(): void {
    console.log('decremented!');
  }
}
