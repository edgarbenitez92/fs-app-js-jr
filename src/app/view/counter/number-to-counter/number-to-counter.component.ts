import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CounterService } from 'src/app/core/services/counter.service';

@Component({
  selector: 'app-number-to-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './number-to-counter.component.html',
  styleUrls: ['./number-to-counter.component.scss'],
})
export class NumberToCounterComponent {
  @Input() numberToCounter: number = 0;
  private counterService = inject(CounterService)

  incrementCounter(incrementBy: number): void {
    const currentCounter = this.counterService.counter.value;
    this.counterService.counter.next(currentCounter + incrementBy);
  }

  decrementCounter(decrementBy: number): void {
    const currentCounter = this.counterService.counter.value;
    this.counterService.counter.next(currentCounter - decrementBy);
  }
}
