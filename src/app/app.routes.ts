import { Routes } from '@angular/router';

export const base_routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/todo/todo.routes').then((m) => m.todo_routes),
  },
  // { path: '', component: CounterComponent },
];
