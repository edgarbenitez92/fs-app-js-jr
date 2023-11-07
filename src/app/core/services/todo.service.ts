import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { TodoForm } from '../interfaces/todoForm.interface';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodosByUser(user: string): Observable<Todo[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Todo[]>(
      `${environment.base_url}/users/${user}/todos`,
      {
        headers,
      }
    );
  }

  deleteTodoById(id: number, user: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http
      .delete(`${environment.base_url}/users/${user}/todos/${id}/delete-todo`, {
        headers,
      })
      .pipe(switchMap(() => this.getTodosByUser(user)));
  }

  buildTodoForm(): FormGroup<TodoForm> {
    return new FormGroup<TodoForm>({
      description: new FormControl('', { validators: [Validators.required] }),
      targetDate: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  getTodoById(id: number, user: string): Observable<Todo> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Todo>(
      `${environment.base_url}/users/${user}/todos/${id}`,
      {
        headers,
      }
    );
  }

  updateTodo(todo: Todo, id: number, user: string): Observable<Todo> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<Todo>(
      `${environment.base_url}/users/${user}/todos/${id}`,
      todo,
      {
        headers,
      }
    );
  }
}
