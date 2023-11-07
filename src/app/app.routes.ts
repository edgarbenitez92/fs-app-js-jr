import { Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';

export const base_routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'todo',
    loadChildren: () =>
      import('./view/todo/todo.routes').then((m) => m.todo_routes),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
