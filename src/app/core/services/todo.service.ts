import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodosByUser(user: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get(`${environment.base_url}/users/${user}/todos`, {
      headers,
    });
  }

  deleteTodoById(id: number, user: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http
      .delete(`${environment.base_url}/users/${user}/todos/${id}/delete-todo`, {
        headers,
      })
      .pipe(switchMap(() => this.getTodosByUser(user)));
  }
}
