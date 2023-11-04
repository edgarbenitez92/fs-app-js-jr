import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
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
  }

  buildDataSourceTable(): void {
    this.dataSourceTodo = new MatTableDataSource<TodoList>(this.todos);
  }
}

interface TodoList {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;
}
