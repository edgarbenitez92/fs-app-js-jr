import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TodoForm } from 'src/app/core/interfaces/todoForm.interface';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/core/interfaces/todo.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoDetailsComponent {
  private router = inject(Router);
  private sessionService = inject(SessionService);
  private activatedRoute = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  formTodo: FormGroup<TodoForm>;
  user = this.sessionService.getToken();

  constructor() {
    this.formTodo = this.todoService.buildTodoForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.getTodoById(id, this.user);
    });
  }

  getTodoById(id: number, user: string) {
    this.todoService.getTodoById(id, user).subscribe({
      next: (todo) => this.setTodoDataForm(todo),
      error: (err: HttpErrorResponse) => console.error('Error: ', err),
    });
  }

  setTodoDataForm(todo: Todo) {
    this.descriptionField?.setValue(todo.description);
    this.targetDateField?.setValue(todo.targetDate);
  }

  updateTodo(formTodo: FormGroup) {}

  navigateToWelcome(): void {
    this.router.navigate(['welcome'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  get descriptionField(): AbstractControl | null {
    return this.formTodo.get('description');
  }

  get targetDateField(): AbstractControl | null {
    return this.formTodo.get('targetDate');
  }
}
