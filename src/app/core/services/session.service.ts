import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private TOKEN: string = 'token';

  constructor() { }

  setToken(token: string) {
    sessionStorage.setItem(this.TOKEN, token);
  }

  getToken(): string {
    return JSON.stringify(sessionStorage.getItem(this.TOKEN));
  }

  destroySession() {
    sessionStorage.clear();
  }
}
