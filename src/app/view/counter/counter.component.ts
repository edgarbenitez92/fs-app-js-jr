import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class CounterComponent {
  incrementCounter(): void {
    console.log('incremented!');
  }
}
