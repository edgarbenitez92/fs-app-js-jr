import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

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
  private router = inject(Router);
  formLogin: FormGroup<LoginForm>;

  constructor() {
    this.formLogin = new FormGroup<LoginForm>({
      user: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  doLogin(form: FormGroup) {
    if (form.valid) this.router.navigate(['./todo/welcome']);
  }
}

interface LoginForm {
  user: FormControl<string | null>;
  password: FormControl<number | null>;
}
