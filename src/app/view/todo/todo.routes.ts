import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

export const todo_routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: ':id',
        component: TodoDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
];
