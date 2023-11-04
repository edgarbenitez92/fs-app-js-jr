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
import { SessionService } from 'src/app/core/services/session.service';

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
  private sessionService = inject(SessionService);
  formLogin: FormGroup<LoginForm>;

  constructor() {

    this.formLogin = new FormGroup<LoginForm>({
      user: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
    this.sessionService.destroySession();
  }

  doLogin(form: FormGroup<LoginForm>) {
    if (form.valid) {
      const user = form.value.user;
      
      this.sessionService.setToken(user!);
      this.router.navigate([`./todo/welcome/${user}`]);
    }
  }
}

interface LoginForm {
  user: FormControl<string | null>;
  password: FormControl<number | null>;
}
