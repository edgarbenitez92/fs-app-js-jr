import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const todo_routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'welcome/:user', component: WelcomeComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: '/todo/login',
    pathMatch: 'full',
  },
];
