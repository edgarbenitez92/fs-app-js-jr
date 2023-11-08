import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { AuthenticateResponse } from '../interfaces/auth.interface';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../interfaces/loginForm.interface';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionService: SessionService
  ) {}

  authenticate(
    username: string,
    password: number
  ): Observable<AuthenticateResponse> {
    return this.http
      .post<AuthenticateResponse>(`${environment.base_url}/authenticate`, {
        username,
        password,
      })
      .pipe(
        tap(({ token }) => {
          this.sessionService.setToken(token);
          this.sessionService.setUserName(username);
          this.router.navigate(['todo/welcome']);
        })
      );
  }

  createLoginForm(): FormGroup<LoginForm> {
    return new FormGroup<LoginForm>({
      user: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
  }
}
