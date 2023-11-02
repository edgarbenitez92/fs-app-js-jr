import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NumberToCounterComponent } from './number-to-counter/number-to-counter.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [NumberToCounterComponent],
})
export class CounterComponent {}
