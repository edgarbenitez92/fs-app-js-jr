import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoDetailsComponent {
  formTodo: FormGroup<any>;

  constructor() {
    this.formTodo = new FormGroup<any>({
      id: new FormControl(''),
    });
  }

  updateTodo(formTodo: FormGroup) {}
}
