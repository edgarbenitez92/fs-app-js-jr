import { FormControl } from '@angular/forms';

export interface LoginForm {
  user: FormControl<string | null>;
  password: FormControl<number | null>;
}
