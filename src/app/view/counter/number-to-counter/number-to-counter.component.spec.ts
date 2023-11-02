import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToCounterComponent } from './number-to-counter.component';

describe('NumberToCounterComponent', () => {
  let component: NumberToCounterComponent;
  let fixture: ComponentFixture<NumberToCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NumberToCounterComponent]
    });
    fixture = TestBed.createComponent(NumberToCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
