import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoService } from 'src/app/core/services/todo.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  private todoService = inject(TodoService);
  private sessionService = inject(SessionService);

  currentDate: Date = new Date();
  todos: TodoList[] = [
    {
      id: 1,
      description: 'Learn AWS',
      done: false,
      targetDate: new Date(
        this.currentDate.setFullYear(this.currentDate.getFullYear() + 1)
      ),
    },
    {
      id: 2,
      description: 'Learn Spring Boot Java',
      done: true,
      targetDate: new Date(
        this.currentDate.setFullYear(this.currentDate.getFullYear() + 1)
      ),
    },
    {
      id: 3,
      description: 'Learn English',
      done: false,
      targetDate: new Date(
        this.currentDate.setFullYear(this.currentDate.getFullYear() + 1)
      ),
    },
  ];

  dataSourceTodo: MatTableDataSource<TodoList> =
    new MatTableDataSource<TodoList>();
  displayedColumnsTodos: string[] = ['id', 'description', 'done', 'targetDate'];

  ngOnInit(): void {
    this.buildDataSourceTable();
    this.getTodosByUser();
  }

  buildDataSourceTable(): void {
    this.dataSourceTodo = new MatTableDataSource<TodoList>(this.todos);
  }

  getTodosByUser() {
    const user = this.sessionService.getToken();
    this.todoService.getTodosByUser(user).subscribe({
      next: (resp) => console.log('resp: ', resp),
      error: (err: HttpErrorResponse) => console.error('Error: ', err),
    });
  }
}

interface TodoList {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;
}
