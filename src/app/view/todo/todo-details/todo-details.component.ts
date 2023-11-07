import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

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
  private router = inject(Router);
  private sessionService = inject(SessionService);
  private activatedRoute = inject(ActivatedRoute);

  formTodo: FormGroup<any>;
  user = this.sessionService.getToken();

  constructor() {
    this.formTodo = new FormGroup<any>({
      id: new FormControl(''),
    });
  }

  updateTodo(formTodo: FormGroup) {}

  navigateToWelcome(): void {
    this.router.navigate(['welcome'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
