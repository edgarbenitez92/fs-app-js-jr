import { Component, inject } from '@angular/core';
import { NumberToCounterComponent } from './number-to-counter/number-to-counter.component';
import { NgFor } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [NumberToCounterComponent, NgFor],
})
export class CounterComponent {
  numbersToCounter: number[] = [1, 3, 5];
  counter!: number;
  private counterService = inject(CounterService)


  ngOnInit(): void {
    this.onChangeSubsCounter();
  }

  onChangeSubsCounter() {
    this.counterService.counter.subscribe((value) => {
      this.counter = value;
    });
  }
}
