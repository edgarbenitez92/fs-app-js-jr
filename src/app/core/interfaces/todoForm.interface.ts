import { FormControl } from '@angular/forms';

export interface TodoForm {
  description: FormControl<string | null>;
  targetDate: FormControl<Date | null>;
}
