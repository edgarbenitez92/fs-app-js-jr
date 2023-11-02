import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-number-to-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './number-to-counter.component.html',
  styleUrls: ['./number-to-counter.component.scss'],
})
export class NumberToCounterComponent {
  @Input() numberToCounter: number = 0;

  constructor(private counterService: CounterService) {}

  incrementCounter(incrementBy: number): void {
    console.log('incremented by: ', incrementBy);
    const currentCounter = this.counterService.counter.value;
    this.counterService.counter.next(currentCounter + incrementBy);
  }

  decrementCounter(decrementBy: number): void {
    console.log('decremented by: ', decrementBy);
    const currentCounter = this.counterService.counter.value;
    this.counterService.counter.next(currentCounter - decrementBy);
  }
}
