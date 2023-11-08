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
    return this.http.get<Todo[]>(`${environment.base_url}/users/${user}/todos`);
  }

  deleteTodoById(id: number, user: string): Observable<any> {
    return this.http
      .delete(`${environment.base_url}/users/${user}/todos/${id}/delete-todo`)
      .pipe(switchMap(() => this.getTodosByUser(user)));
  }

  buildTodoForm(): FormGroup<TodoForm> {
    return new FormGroup<TodoForm>({
      description: new FormControl('', { validators: [Validators.required] }),
      targetDate: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  getTodoById(id: number, user: string): Observable<Todo> {
    return this.http.get<Todo>(
      `${environment.base_url}/users/${user}/todos/${id}`
    );
  }

  createTodo(todo: Todo, user: string): Observable<Todo> {
    return this.http.post<Todo>(
      `${environment.base_url}/users/${user}/create-todo`,
      todo
    );
  }

  updateTodo(todo: Todo, user: string): Observable<Todo> {
    return this.http.put<Todo>(
      `${environment.base_url}/users/${user}/update-todo`,
      todo
    );
  }
}
