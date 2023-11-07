import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoService } from 'src/app/core/services/todo.service';
import { SessionService } from 'src/app/core/services/session.service';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from 'src/app/core/interfaces/todo.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  private todoService = inject(TodoService);
  private sessionService = inject(SessionService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  user = this.sessionService.getToken();
  currentDate: Date = new Date();
  dataSourceTodo: MatTableDataSource<Todo> = new MatTableDataSource<Todo>();
  displayedColumnsTodos: string[] = [
    'description',
    'done',
    'targetDate',
    'actions',
  ];

  ngOnInit(): void {
    this.getTodosByUser();
  }

  buildDataSourceTable(todos: Todo[]): void {
    this.dataSourceTodo = new MatTableDataSource<Todo>(todos);
  }

  getTodosByUser() {
    this.todoService.getTodosByUser(this.user).subscribe({
      next: (todos) => this.buildDataSourceTable(todos),
      error: (err: HttpErrorResponse) => console.error('Error: ', err),
    });
  }

  deleteTodoById(event: Event, todo: Todo) {
    event.stopPropagation();

    this.todoService.deleteTodoById(todo.id, this.user).subscribe({
      next: (todos: Todo[]) =>
        (this.dataSourceTodo = new MatTableDataSource<Todo>(todos)),
    });
  }

  updateTodo(event: Event, todo: Todo) {
    event.stopPropagation();
    this.router.navigate([todo.id], { relativeTo: this.activatedRoute.parent });
  }
}
