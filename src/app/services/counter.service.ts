import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() {}
}
