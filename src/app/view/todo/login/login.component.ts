import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  formLogin: FormGroup<LoginForm>;

  constructor() {
    this.formLogin = this.formBuilder.nonNullable.group<LoginForm>({
      user: new FormControl(),
      password: new FormControl(),
    });
  }

  doLogin(form: FormGroup) {
    console.log('formLogin: ', form.value);
  }
}

interface LoginForm {
  user: FormControl<string | null>;
  password: FormControl<number | null>;
}
