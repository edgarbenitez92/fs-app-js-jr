import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodosByUser(user: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get(`http://localhost:8080/users/${user}/todos`, { headers });
  }

}
