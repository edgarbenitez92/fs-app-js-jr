import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from 'src/app/core/services/session.service';
import { ViewEncapsulation } from '@angular/core';
import { LoginForm } from 'src/app/core/interfaces/loginForm.interface';
import { AuthService } from 'src/app/core/services/auth.service';

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
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private sessionService = inject(SessionService);
  formLogin: FormGroup<LoginForm>;

  constructor() {
    this.formLogin = this.authService.createLoginForm();
  }

  ngOnInit(): void {
    this.sessionService.destroySession();
  }

  doLogin(form: FormGroup<LoginForm>) {
    if (form.valid) {
      const user = form.value.user;
      const password = form.value.password;
      this.authService.authenticate(user, password).subscribe();
    }
  }
}
