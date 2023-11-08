import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private TOKEN: string = 'token';
  private USER: string = 'user_name';

  constructor() {}

  setToken(token: string) {
    sessionStorage.setItem(this.TOKEN, token);
  }

  getToken(): string {
    return sessionStorage.getItem(this.TOKEN) || '';
  }

  setUserName(name: string) {
    sessionStorage.setItem(this.USER, name);
  }

  getUserName(): string {
    return sessionStorage.getItem(this.USER) || '';
  }

  destroySession() {
    sessionStorage.clear();
  }
}
